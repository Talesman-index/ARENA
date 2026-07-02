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
        commentDigitaliserPmeBenin: resolve(__dirname, 'articles/comment-digitaliser-pme-benin.html'),
        whatsappBusinessRetailCotonou: resolve(__dirname, 'articles/whatsapp-business-retail-cotonou.html'),
        importanceAuditOperationnel: resolve(__dirname, 'articles/importance-audit-operationnel.html'),
        optimisationLogistiqueCotonou: resolve(__dirname, 'articles/optimisation-logistique-cotonou.html'),
        digitalisationLogistiqueCoteDivoire: resolve(__dirname, 'articles/digitalisation-logistique-cote-divoire.html'),
        politiqueDeConfidentialite: resolve(__dirname, 'politique-de-confidentialite.html'),
        mentionsLegales: resolve(__dirname, 'mentions-legales.html'),
      }
    }
  }
});
