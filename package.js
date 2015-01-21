Package.describe({
  name: 'emdagon:nvd3',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'NVD3 Charts for Meteor (based on nvd3-community/nvd3)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/emdagon/meteor-nvd3.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('d3js:d3', 'client');

  api.add_files('nvd3/build/nv.d3.js', 'client');
  api.add_files('nvd3/build/nv.d3.css', 'client');
});
