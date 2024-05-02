const path = require('path')
const CracoLessPlugin = require('craco-less');
module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
            // '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    },
    // less
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}