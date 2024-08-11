import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineConfig((mode) => {
    const { VITE_APP_BASE_URL } = loadEnv(mode.mode, process.cwd());
    return {
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
                'vue': 'vue/dist/vue.esm-bundler.js'
            }
        },
        assetsInclude: ['**/*.hdr', '**/*.glb'],
        esbuild: { loader: { '.js': '.jsx' } },
        base: VITE_APP_BASE_URL,
        server: {
            host: '0.0.0.0',
            open: true,
            port: 9999
        },
        build: {
            assetsDir: 'static',
            emptyOutDir: true,
            minify: 'esbuild',
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html'),
                    preview: resolve(__dirname, 'preview.html'),
                },
                output: {
                    compact: true,
                    entryFileNames: "static/js/[name]-[hash].js",
                    chunkFileNames: "static/js/[name]-[hash].js",
                    assetFileNames: "static/[ext]/[name].[ext]",
                }

            },
        },
    }
})
