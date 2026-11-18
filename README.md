# CART3R WEB PANEL — v0.1.0

A responsive static dashboard UI for the CART3R Minecraft remote-admin project.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.

## Deploy to Cloudflare Pages (free `pages.dev` subdomain)
1. Create a GitHub repository and upload `index.html`, `style.css`, and `app.js` to its root.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. For a plain static site, leave the build command empty and set the output directory to `.`.
5. Deploy. Cloudflare assigns a `*.pages.dev` address.

## Important
This is a frontend preview. It does not connect to Minecraft, run commands, or read/write files.
Do not put plugin API tokens or other secrets in browser JavaScript.
Before enabling real controls, build an authenticated backend bridge between the website and the plugin. Keep the plugin API private, use HTTPS, restrict file operations to an approved server directory, and validate every command and user permission server-side.
