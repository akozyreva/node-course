const fs = require('fs')

// create a file, if it doesn't exist and rewrite content
fs.writeFileSync('nodes.txt', 'My name is Ann\n')
fs.appendFileSync('nodes.txt', 'data to append');

// cmd for execution   node app.js
