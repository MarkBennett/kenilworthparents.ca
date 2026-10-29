# kenilworthparents.ca
Website for the Kenilworth School of Edmonton Parent Association

An [Astro](https://astro.build) site deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Editing content

All page content (mission, the president's message, contact details, mailing address,
executives and active fundraisers) lives in [`src/data/site.ts`](src/data/site.ts).
Items marked `TODO` still need to be confirmed.

## Commands

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `nvm use`         | Switch to the Node version in `.nvmrc`              |
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Start the local dev server at `localhost:4321`      |
| `npm run build`   | Build the site to `./dist/`                         |
| `npm run preview` | Preview the production build locally                |
| `npm run deploy`  | Build and deploy to Cloudflare Workers (`wrangler`) |

Worker settings are in [`wrangler.jsonc`](wrangler.jsonc).
