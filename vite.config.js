import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        beninDistribution: resolve(__dirname, 'cases/benin-distribution.html'),
        sahelFoods: resolve(__dirname, 'cases/sahel-foods.html'),
        atlantiqueLogistique: resolve(__dirname, 'cases/atlantique-logistique.html'),
      }
    }
  }
});
