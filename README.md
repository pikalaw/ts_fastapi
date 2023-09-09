# ts_fastapi

Template for TypeScript frontend and Python's FastAPI backend

## Client setup

```sh
npm init
npm i -D typescript
npx tsc --init
npm i -D gts
npx gts init
npm i -D parcel
npm i -D npm-check-updates

npm i rxjs
npm i showdown
npm i -D @types/showdown
```

Add these to `package.json`:

```json
  "source": "template/index.html",
  "scripts": {
    "start": "npx parcel -p 8000",
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
  "include": ["script/**/*.ts"],
  "exclude": ["node_modules"],
```

Renaming `.prettierrc.js` to `.prettierrc.cjs`, because Prettier cannot import ESM.

Renaming `/src/` to `/script/`.

## Server setup

```bash
# Setup environment.
python3 -m venv venv
source venv/bin/activate

# mypy.
python3 -m pip install mypy

# FastAPI.
python3 -m pip install "fastapi[all]" "uvicorn[standard]" httpx
```

Fix `python.defaultInterpreterPath` in `.vscode/settings.json`.

## Setup after using the github template

```bash
make install-env
```

Optional: Consider running `make update-env` too.
