# Scraplords Cinematic Website — Starter

A modular React + TypeScript + Vite website using original Scraplords images supplied in the conversation.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` directory to Netlify, Cloudflare Pages, or Vercel. GitHub Pages also works with a matching Vite `base` setting for project subpaths. For a custom domain hosted at the root, the default base is fine.

## Repository structure

- `src/main.tsx`: page composition, navigation, animation and Web3 providers
- `src/style.css`: design system, transitions and responsive styles
- `src/components/WorldMap.tsx`: map exploration and location dialogs
- `src/components/WalletConnect.tsx`: injected EVM wallet connection
- `src/data/world.ts`: editable destinations and character roster
- `public/assets/`: supplied Scraplords image assets

## Important implementation notes

- Wallet connect uses injected EIP-1193 browser wallets (for example MetaMask). Users need a compatible extension/app. Connection does not authorize transactions. No NFT ownership checks or smart contract actions are implemented yet.
- Territory markers are manually positioned percentage coordinates on the supplied map; adjust them in `src/data/world.ts`.
- The character cards are editorial previews using supplied artwork; replace with isolated portraits for a full character catalog.
- No backend, authentication, payments, minting, analytics, or multiplayer features are implied.
- Use HTTPS in production and audit contracts before introducing blockchain transactions.
- Test keyboard navigation, screen readers, and performance on actual target devices before production launch.
