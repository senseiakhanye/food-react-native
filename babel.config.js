module.exports = function(api) {
  api.cache(true);
  let dynamicPlugin = process.env.NODE_ENV === "development" ?
    ["inline-dotenv", { path: ".env.development"}] :
    ["inline-dotenv", { path: ".env.production"}];
  dynamicPlugin = dynamicPlugin || ["inline-dotenv", { path: ".env.development"}];
  return {
    presets: ['babel-preset-expo'],
    plugins: [dynamicPlugin]
    // env: {
    //   production: {
    //     plugins: [["inline-dotenv",{
    //       path: ".env.production"
    //     }]]
    //   },
    //   development: {
    //     plugins: [["inline-dotenv",{
    //       path: ".env.development"
    //     }]]
    //   }
    // }
  };
};
