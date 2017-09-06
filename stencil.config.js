exports.config = {
  bundles: [
    { components: ['app-main','app-nav']},
    { components: ['app-view1','app-view2','app-view3'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
