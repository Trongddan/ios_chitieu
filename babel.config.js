module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          screens: './src/screens',
          navigators: './src/navigators',
          assets: './src/assets',
          constants: './src/constants',
        },
      },
    ],
  ],
};
