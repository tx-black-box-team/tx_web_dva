const models = require.context('./', false, /\.js$/);

export function registerModels(app) {
  models.keys().map(key => {
    if (key.indexOf('index') === -1) {
      app.model(models(key).default);
    }
    return null;
  });
}
