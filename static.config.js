import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  siteRoot: "http://kbz-static.s3-website-eu-west-1.amazonaws.com/",
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      // {
      //   path: '/services',
      //   component: 'src/containers/Services',
      // },
      // {
      //   path: '/price',
      //   component: 'src/containers/Price',
      // },
      // {
      //   path: '/contacts',
      //   component: 'src/containers/Contacts',
      // },
      {
        path: '/typography',
        component: 'src/containers/Typography',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                      },
                    },
                    {
                      loader: 'sass-loader',
                      options: { includePaths: ['src/'] },
                    },
                  ],
                }),
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ];
    // support for Internet Explorer browser
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry]
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry]
    }
    return config
  },
  // inlineCss: true,
}
