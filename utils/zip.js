#!/usr/bin/env node
const zip = require('bestzip');
const date = require('./timestamp');

//const dest = 'bin/sai360-fontstack_' + date.TIMESTAMP + '.zip';
const dest = 'bin/AdrenalineLightTheme.zip';

zip({ 
  source: ['icons/*', 'src/*', 'manifest.json'], 
  destination: dest,
  cwd: './',
}).then(() => {
  console.log(`Saved to ${dest}`)
});