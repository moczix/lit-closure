import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './tsc-out/apps/main.js',
  output: {
    file: './built/bundle.js',
    format: 'es'
  },
  plugins: [
    nodeResolve()]
};