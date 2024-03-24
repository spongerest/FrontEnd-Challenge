const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A', // Ubah warna primer
              '@link-color': '#1DA57A', // Ubah warna link
              '@success-color': '#52c41a', // Ubah warna sukses
              // Tambahkan lebih banyak variabel customisasi di sini
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
