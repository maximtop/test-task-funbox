module.exports = (api) => {
  api.cache(false);

  const envOptions = {
    targets: {
      browsers: ['> 0.25%', 'not dead'],
      node: 'current',
    },
  };

  return {
    presets: [
      ['@babel/preset-env', envOptions],
      ['@babel/preset-react'],
    ],
  };
};
