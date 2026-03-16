import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4173, strictPort: true } });
const browser = await chromium.launch();
const page = await browser.newPage();

// Styled PDF
await page.goto('http://localhost:4173/resume', { waitUntil: 'networkidle' });
await page.pdf({
  path: 'dist/Haris_Khan_Resume_Styled.pdf',
  preferCSSPageSize: true,
  printBackground: true,
});
console.log('Generated dist/Haris_Khan_Resume_Styled.pdf');

// Boring PDF
await page.goto('http://localhost:4173/resume?mode=boring', { waitUntil: 'networkidle' });
await page.pdf({
  path: 'dist/Haris_Khan_Resume.pdf',
  preferCSSPageSize: true,
  printBackground: false,
});
console.log('Generated dist/Haris_Khan_Resume.pdf');

await browser.close();
server.httpServer.close();
