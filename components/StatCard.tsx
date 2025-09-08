import React from 'react';

interface StatCardProps {
  statistic: string;
  description: string;
  source: string;
  sourceUrl?: string;
  delay?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  delay = '0s', 
  description, 
  source, 
  sourceUrl,
  statistic
}) => {
  return (
    <div 
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="text-center">
        <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
          {statistic}
        </p>
        <p className="text-lg text-slate-200 mb-4 leading-relaxed">
          {description}
        </p>
        {sourceUrl ? (
          <a 
            href={sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 border-b border-dotted border-slate-500 hover:border-cyan-400"
          >
            Fuente: {source}
          </a>
        ) : (
          <p className="text-sm text-slate-400">
            Fuente: {source}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;