module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '~': '.',
            '@routes': './routes',
            '@api': './api',
            '@components': './components',
            '@hooks': './hooks',
            '@screens': './screens',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
