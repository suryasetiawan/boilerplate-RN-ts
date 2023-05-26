module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }
    ],
    ['react-native-paper/babel'],
    ['babel-plugin-inline-import', { extensions: ['.svg'] }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./app'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './app',
          '@kernel': './app/kernel',
          '@store': './app/store',
          '@assets': './app/assets',
          '@screens': './app/screens',
          '@utils': './app/utils'
        }
      }
    ]
  ]
}
