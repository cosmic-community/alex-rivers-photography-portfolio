const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), '.next', 'server', 'app');
const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('dashboard-console-capture.js')) {
      return;
    }
    
    if (content.includes('</head>')) {
      content = content.replace('</head>', `${scriptTag}</head>`);
    } else if (content.includes('</body>')) {
      content = content.replace('</body>', `${scriptTag}</body>`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected console capture script into ${filePath}`);
  } catch (error) {
    console.error(`Error injecting script into ${filePath}:`, error);
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        injectScript(filePath);
      }
    });
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error);
  }
}

if (fs.existsSync(distDir)) {
  walkDir(distDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build directory not found. Run build first.');
}