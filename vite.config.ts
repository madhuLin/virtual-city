import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
// import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(), 
	],
	base: "./",
	server: {
		host: "0.0.0.0"
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
});
