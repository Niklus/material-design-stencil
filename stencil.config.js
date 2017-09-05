exports.config = {
  bundles: [
    { components: ['my-app','app-nav']},
    { components: ['home-page','about-page','contact-page'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
