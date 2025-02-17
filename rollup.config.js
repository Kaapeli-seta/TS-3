import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/main.ts',
  output: {
    file: './build/main.js',
    format: 'cjs',
  },
  plugins: [typescript()],
  watch: {
    clearScreen: false,
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};
