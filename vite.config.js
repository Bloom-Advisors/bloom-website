import {
    defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/',
    optimizeDeps: {
        esbuildOptions: {
            logOverride: {
                directives: 'silent',
            },
        },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});