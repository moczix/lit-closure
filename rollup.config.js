import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './tsc-out/apps/main.js',
  output: {
    dir: 'built',
    format: 'es'
  },
  plugins: [
    nodeResolve()]
};