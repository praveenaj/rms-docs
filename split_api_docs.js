const fs = require('fs');
const path = require('path');

// Read the main API file
const apiFilePath = path.join(__dirname, 'docs', 'api.md');
const apiContent = fs.readFileSync(apiFilePath, 'utf8');

// Find all sections starting with <h1> tags
const sectionRegex = /<h1 id="rms-rest-api-(.*?)">(.*?)<\/h1>([\s\S]*?)(?=<h1 id="rms-rest-api-|$)/g;
let match;

// Create the api directory if it doesn't exist
const apiDirPath = path.join(__dirname, 'docs', 'api');
if (!fs.existsSync(apiDirPath)) {
  fs.mkdirSync(apiDirPath, { recursive: true });
}

// Process each match
while ((match = sectionRegex.exec(apiContent)) !== null) {
  const idPart = match[1]; // The ID part of the h1 tag
  const title = match[2]; // The title text
  const content = match[0]; // The entire matched content including the h1 and everything up to the next h1

  // Create filename by replacing spaces with hyphens
  const filename = `${idPart}.md`;
  const filePath = path.join(apiDirPath, filename);

  // Write the content to a file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created ${filename}`);
}

console.log('Done splitting API documentation.');