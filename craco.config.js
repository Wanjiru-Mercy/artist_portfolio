const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#ca2c92",
            
              
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};