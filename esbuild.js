"use strict";

var esbuild = require('esbuild')

var entryPoints = [
    './src/mains/dagview.tsx',
]

esbuild.buildSync({
    entryPoints: entryPoints,
    bundle: true,
    define: {
        'process.env.NODE_ENV': '"production"',
    },
    minify: true,
    sourcemap: true,
    outdir: './dist/webdist',
    external: ['react-dom'],
})
