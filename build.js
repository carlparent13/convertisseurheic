const { execSync } = require('child_process');
const fs = require('fs');

// Bundle heic-decode + ses dépendances en un seul fichier JS standalone
execSync('npx browserify -r heic-decode -o public/heic-decode-bundle.js', { stdio: 'inherit' });
console.log('Bundle créé : public/heic-decode-bundle.js');
