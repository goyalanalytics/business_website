# Goyal Analytics Group Website

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy on Render
Create a new **Static Site** and use:

- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

If needed, add a rewrite rule:

- Source: `/*`
- Destination: `/index.html`
- Action: `Rewrite`
