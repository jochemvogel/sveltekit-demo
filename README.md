# SvelteKit Demo

I used this demo in a talk I gave about SvelteKit. Simplified the default SvelteKit demo and added the good ol' Star Wars API to explain endpoints and dynamic routing.

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Env variables

Copy `.env.example` and rename it to `.env`

The original SWAPI is https://swapi.dev/, but the SSL certificate was expired when I tested it. For this reason I added a 'backup' API https://swapi.tech/. This one has almost the same data, but is structured a little bit different.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
