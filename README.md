<div align='center'>
    <br/>
    <br/>
    <!-- <img src='' width='320px'> -->
    <br/>
    <h3>Esbuild plugins</h3>
    <br/>
    <br/>
</div>

# Plugins

-   [x] `@esbuild-plugins/node-resolve`
-   [x] `@esbuild-plugins/esm-externals`
-   [x] `@esbuild-plugins/node-modules-polyfill`
-   [x] `@esbuild-plugins/node-globals-polyfill`
-   [ ] `@esbuild-plugins/tsconfig-paths`
-   [ ] `@esbuild-plugins/html`

## @esbuild-plugins/node-resolve

Resolve files with the [resolve](https://www.npmjs.com/package/resolve) package and adds support for Yarn berry PnP.

```ts
import NodeResolve from '@esbuild-plugins/node-resolve'
import { build } from 'esbuild'
build({
    plugins: [
        NodeResolve({
            extensions: ['.ts', '.js'],
            onResolved: (resolved) => {
                if (resolved.includes('node_modules')) {
                    return {
                        external: true,
                    }
                }
                return resolved
            },
        }),
    ],
})
```

## @esbuild-plugins/esm-externals

Makes some packages externals and forces the output to be valid ESM

```ts
import EsmExternals from '@esbuild-plugins/esm-externals'
import { build } from 'esbuild'
build({
    plugins: [EsmExternals({ externals: ['react', 'react-dom'] })],
})
```

## @esbuild-plugins/node-modules-polyfill

Polyfills nodejs builtin modules for the browser

```ts
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill'
import { build } from 'esbuild'
build({
    plugins: [NodeModulesPolyfills()],
})
```

## @esbuild-plugins/node-globals-polyfill

Polyfills nodejs globals like `process`

```ts
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
import { build } from 'esbuild'
build({
    plugins: [
        GlobalsPolyfills({
            process: true,
            buffer: true,
            define: { 'process.env.var': '"hello"' }, // inject will override define, to keep env vars you must also pass define here https://github.com/evanw/esbuild/issues/660
        }),
    ],
})
```

## Sponsors

[**Notaku**](https://notaku.website)


[![Notaku](https://preview.notaku.website/github_banner.jpg)](https://notaku.website)
