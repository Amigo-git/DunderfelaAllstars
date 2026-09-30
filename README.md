# Dunderfela

The homepage displays the original hand-drawn sketch at every screen size. Names and social links are in `dist/index.html`; email addresses are displayed without links. Foto, Press kit, and Rider open Google Drive folders, and Spotify opens the band's album. Both logo drawings download the original image in `dist/assets/dunderfela-logo-original.jpg`. Live shows a coming-soon notice.

## Deployment

Edit site files only in `dist/`. Push to `main` to update [www.dunderfela.no](https://www.dunderfela.no/) through Vercel and [the GitHub Pages site](https://amigo-git.github.io/DunderfelaAllstars/) through the Pages workflow. Both publish the same `dist/` files.

There is no build step. For a local preview, run `npm run dev` (`server.mjs`) and open `http://127.0.0.1:4173/`. Run `npm run check` to check the JavaScript syntax.
