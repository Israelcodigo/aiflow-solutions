module.exports = {
  options: {
    doNotFollow: {
      path: 'node_modules',
    },
    tsConfig: {
      fileName: './tsconfig.json',
    },
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/[^/]+',
      },
      archi: {
        collapsePattern: '^(node_modules|src/[^/]+)',
      },
      text: {
        highlightFocused: true,
      },
    },
  },
  forbidden: [
    {
      name: 'no-circular',
      severity: 'warn',
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: 'no-orphans',
      severity: 'warn',
      from: {
        orphan: true,
        pathNot: [
          '\\.d\\.ts$',
          'index\\.[jt]sx?$',
          'App\\.[jt]sx?$',
          '(spec|test)\\.[jt]sx?$',
          '\\.(stories|story)\\.[jt]sx?$',
        ],
      },
      to: {},
    },
    {
      name: 'no-deprecated-core',
      severity: 'warn',
      from: {},
      to: {
        dependencyTypes: ['core'],
        path: ['punycode', 'domain', 'sys', 'freelist'],
      },
    },
  ],
};
