#!/usr/bin/env node
/* Pocketboost build: copies src/ to dist/ and fills in your site address.
   No dependencies. Run:  npm run build
   Set your address with an environment variable or a flag:
     SITE_URL=https://yourdomain.com npm run build
     npm run build -- --site=https://yourdomain.com
   On Netlify the site address is picked up automatically from the URL
   variable, then SITE_URL overrides it once you add a custom domain. */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const OUT = path.join(__dirname, 'dist');

const flag = process.argv.find((a) => a.startsWith('--site='));
let site = (flag && flag.slice(7)) || process.env.SITE_URL || process.env.URL || 'https://example.com';
site = site.trim().replace(/\/+$/, '');

if (!/^https?:\/\/[^\s/]+$/.test(site)) {
  console.error('Invalid site address: "' + site + '". Use the form https://yourdomain.com (no path).');
  process.exit(1);
}
if (site === 'https://example.com') {
  console.warn('WARNING: no site address set, using https://example.com. Set SITE_URL before you go live.');
}

const date = new Date().toISOString().slice(0, 10);
const TEXT = /\.(html|txt|xml)$/;

function copy(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copy(src, dest);
    else if (TEXT.test(entry.name)) {
      const out = fs.readFileSync(src, 'utf8').replace(/%SITE_URL%/g, site).replace(/%BUILD_DATE%/g, date);
      fs.writeFileSync(dest, out);
    } else fs.copyFileSync(src, dest);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
copy(SRC, OUT);
console.log('Built dist/ for ' + site);
