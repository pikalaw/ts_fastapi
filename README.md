# ts_fastapi

Template for TypeScript frontend and Python's FastAPI backend

## Client-side setup

```sh
npm init
npm i -D typescript
npx tsc --init
npm i -D gts
npx gts init
npm i -D parcel

npm i rxjs
```

Add these to `package.json`:

```json
  "source": "template/index.html",
  "scripts": {
    "start": "npx parcel",
  },
  "type": "module",
```

Remove the `"main"` field.

Change these in `tsconfig.json`:

```json
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom"],
    "module": "esnext",
    "moduleResolution": "nodenext",
    "outDir": "script",
    "inlineSources": true,
    "experimentalDecorators": true,
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
```

Renaming `.prettierrc.js` to `.prettierrc.cjs`, because Prettier cannot import ESM.

Renaming `/src/` to `/script/`.

## Server-side setup
