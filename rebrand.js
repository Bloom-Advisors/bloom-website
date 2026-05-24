const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk(cssDir, function(filePath) {
  if (!filePath.endsWith('.css')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace Neon Green with Muted Sage Green
  content = content.replace(/#d4ff00/gi, '#5FA777');
  content = content.replace(/--brand-neon/g, '--brand-primary');
  
  // 2. Replace Deep Dark Backgrounds with Midnight Navy
  content = content.replace(/#121212|#0c0c0e|#141416|#18181b/gi, '#0B1F33');

  // 3. Replace Dark Text/Headers (Zinc 950) with Midnight Navy so all dark text is branded
  content = content.replace(/#09090b/gi, '#0B1F33');

  // 4. Replace Dark Borders (Zinc 800) with a slightly lighter Navy
  content = content.replace(/#27272a/gi, '#163A5F');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
