module.exports = {
  presets: ['module:@react-native/babel-preset','@babel/preset-react'],
  plugins: [
    'react-native-reanimated/plugin', // Add this line
  ],
  plugins: [
    ['module:react-native-dotenv', {
      "moduleName": "@env",
      "path": ".env"
    }]
  ]
};
