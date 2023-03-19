import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs';

import postcss from 'rollup-plugin-postcss'

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file:'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            commonjs({
               namedExports: {
                  // https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
                  'node_modules/react/index.js': ['useState', 'useRef', 'useEffect'],
                },
              }),
            postcss({
                plugins:[],
                minimize: true
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve()
        ]
    }
]