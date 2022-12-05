/**
 * babel.config.js
 * @author HU JIAJUN <e0556371@u.nus.edu>
 * @file Babel configuration stript
 */

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
    ['@babel/preset-react', {
      'runtime': 'automatic'
    }],
    '@babel/preset-typescript',
  ],
};
