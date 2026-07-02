const fs = require('fs');
const file = 'src/components/Hyperspeed.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\\$\{THREE/g, '${THREE');
fs.writeFileSync(file, content);
console.log('Fixed Hyperspeed.jsx');
