const replace = require("replace");
const date = require('./timestamp');
const c = require('./colors');

const pkg = require('../package.json');

// Update generated date
// replace({
//     regex: "%date_generated%",
//     replacement: date.TIMESTAMP,
//     paths: ['./dist/index.html', './dist/SAI360_Icons.css'],
//     silent: false,
// });
// console.log(`${c.INFO}`, `Generated date updated to ${date.TIMESTAMP}\n`);

// // Update generated date long
// replace({
//     regex: "%date_generated_long%",
//     replacement: date.NOW,
//     paths: ['./dist/index.html'],
//     silent: false,
// });
// console.log(`${c.INFO}`, `Generated date long updated to ${date.NOW}\n`);

// // Update version from package
// replace({
//     regex: "%uikit_version%",
//     replacement: pkg.version,
//     paths: ['./dist/index.html', './dist/SAI360_Icons.css'],
//     silent: false,
// });
// console.log(`${c.INFO}`, `Version updated to v${pkg.version}\n`);

// // Update names from package
// replace({
//     regex: "%uikit_name%",
//     replacement: pkg.fullname,
//     paths: ['./dist/SAI360_Icons.css'],
//     silent: false,
// });
// console.log(`${c.INFO}`, `Package Name updated to ${pkg.fullname}\n`);

// // Update url from package
// replace({
//     regex: "%uikit_url%",
//     replacement: pkg.url,
//     paths: ['./dist/SAI360_Icons.css'],
//     silent: false,
// });
// console.log(`${c.INFO}`, `Package URL updated to ${pkg.url}\n`);
