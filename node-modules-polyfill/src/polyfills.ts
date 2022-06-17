// Taken from https://github.com/ionic-team/rollup-plugin-node-polyfills/blob/master/src/modules.ts

import { NodePolyfillsOptions } from '.'

const EMPTY_PATH = require.resolve(
    'node-stdlib-browser/mock/empty.js',
)

export function builtinsPolyfills() {
    const libs = new Map()

    libs.set(
        'process',
        require.resolve('node-stdlib-browser/process'),
    )
    libs.set(
        'buffer',
        require.resolve('node-stdlib-browser/buffer'),
    )
    libs.set(
        'util',
        require.resolve('node-stdlib-browser/util'),
    )
    libs.set('sys', libs.get('util'))
    libs.set(
        'events',
        require.resolve('node-stdlib-browser/events'),
    )
    libs.set(
        'stream',
        require.resolve('node-stdlib-browser/stream'),
    )
    libs.set(
        'path',
        require.resolve('node-stdlib-browser/path'),
    )
    libs.set(
        'querystring',
        require.resolve('node-stdlib-browser/querystring'),
    )
    libs.set(
        'punycode',
        require.resolve('node-stdlib-browser/punycode'),
    )
    libs.set(
        'url',
        require.resolve('node-stdlib-browser/url'),
    )
    libs.set(
        'string_decoder',
        require.resolve(
            'node-stdlib-browser/string_decoder',
        ),
    )
    libs.set(
        'http',
        require.resolve('node-stdlib-browser/http'),
    )
    libs.set(
        'https',
        require.resolve('node-stdlib-browser/https'),
    )
    libs.set('os', require.resolve('node-stdlib-browser/os'))
    libs.set(
        'assert',
        require.resolve('node-stdlib-browser/assert'),
    )
    libs.set(
        'constants',
        require.resolve('node-stdlib-browser/constants'),
    )
    libs.set(
        '_stream_duplex',
        require.resolve(
            'node-stdlib-browser/_stream_duplex',
        ),
    )
    libs.set(
        '_stream_passthrough',
        require.resolve(
            'node-stdlib-browser/_stream_passthrough',
        ),
    )
    libs.set(
        '_stream_readable',
        require.resolve(
            'node-stdlib-browser/_stream_readable',
        ),
    )
    libs.set(
        '_stream_writable',
        require.resolve(
            'node-stdlib-browser/_stream_writable',
        ),
    )
    libs.set(
        '_stream_transform',
        require.resolve(
            'node-stdlib-browser/_stream_transform',
        ),
    )
    libs.set(
        'timers',
        require.resolve('node-stdlib-browser/timers'),
    )
    libs.set(
        'console',
        require.resolve('node-stdlib-browser/console'),
    )
    libs.set('vm', require.resolve('node-stdlib-browser/vm'))
    libs.set(
        'zlib',
        require.resolve('node-stdlib-browser/zlib'),
    )
    libs.set(
        'tty',
        require.resolve('node-stdlib-browser/tty'),
    )
    libs.set(
        'crypto',
        require.resolve('node-stdlib-browser/crypto'),
    )
    libs.set(
        'domain',
        require.resolve('node-stdlib-browser/domain'),
    )

    // not shimmed
    libs.set('dns', EMPTY_PATH)
    libs.set('dgram', EMPTY_PATH)
    libs.set('child_process', EMPTY_PATH)
    libs.set('cluster', EMPTY_PATH)
    libs.set('module', EMPTY_PATH)
    libs.set('net', EMPTY_PATH)
    libs.set('readline', EMPTY_PATH)
    libs.set('repl', EMPTY_PATH)
    libs.set('tls', EMPTY_PATH)
    libs.set('fs', EMPTY_PATH)

    // libs.set(
    //     'fs',
    //     require.resolve('node-stdlib-browser/browserify-fs'),
    // )

    return libs
}
