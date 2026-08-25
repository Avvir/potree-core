import config from './webpack.config.js';

export default Object.assign(config, {
  devtool: "inline-source-map",
  mode: 'production'
});
