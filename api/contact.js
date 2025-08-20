// Vercel Serverless Function - Formulario de Contacto Básico
export default async function handler(req, res) {
  // CORS headers para el dominio
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message, honeypot } = req.body;

  // Honeypot anti-spam - si está lleno, es un bot
  if (honeypot && honeypot.trim() !== '') {
    console.log('🤖 Bot detectado via honeypot:', honeypot);
    return res.status(200).json({ success: true }); // Fake success para confundir bots
  }

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Faltan campos obligatorios: nombre, email y mensaje son requeridos' 
    });
  }

  // Validación email básica
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email no válido' });
  }

  // Validación longitud para prevenir spam
  if (name.length > 100 || email.length > 100 || message.length > 1000) {
    return res.status(400).json({ error: 'Uno o más campos exceden la longitud máxima' });
  }

  // Log para debugging (quitar en producción si quieres)
  console.log('📧 Nuevo contacto recibido:', {
    name,
    email: email.substring(0, 3) + '***', // Email parcialmente oculto en logs
    company: company || 'N/A',
    messageLength: message.length
  });

  try {
    // Método 1: Usar FormSubmit.co como backend (simple)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('company', company || '');
    formData.append('message', message);
    formData.append('_subject', `🚀 Nuevo Lead: ${name}${company ? ` (${company})` : ''}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    // Email de destino desde variable de entorno
    const destinationEmail = process.env.CONTACT_EMAIL || 'israelicloud1@gmail.com';
    const formSubmitUrl = `https://formsubmit.co/${destinationEmail}`;

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      return res.status(200).json({ 
        success: true, 
        message: '¡Gracias por tu interés! Te contactaremos en menos de 24 horas.' 
      });
    } else {
      throw new Error(`FormSubmit failed with status: ${response.status}`);
    }

  } catch (error) {
    console.error('❌ Error enviando email:', error);
    
    // Fallback: al menos loggear el contacto para no perderlo
    console.log('📝 CONTACTO PERDIDO - Guardar manualmente:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      message: message.substring(0, 100) + '...'
    });

    return res.status(500).json({ 
      error: 'Error interno del servidor. Por favor, inténtalo más tarde o contacta directamente.' 
    });
  }
}