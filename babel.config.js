module.exports = function babelConfig(api) {
  api.cache(true)

  /**
   * Babel presets
   */
  const presets = [
    ['@babel/preset-env', {
      debug: false,
      loose: true,
    }],
    '@babel/typescript',
  ]

  /**
   * Babel plugins
   */
  const plugins = [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-regenerator',
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': false,
        'helpers': false,
        'regenerator': true,
        'useESModules': true,
      },
    ],
    [
      'module-resolver',
      {
        'root': [
          './',
        ],
        'alias': {
          '@server/common': './src/server/common',
        },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
