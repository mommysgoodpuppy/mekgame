import react from "@vitejs/plugin-react";
import deno from '@deno/vite-plugin'
import { defineConfig } from "vite";
import process from "node:process";

const cert: string = await Deno.readTextFile('./certs/cert.pem');
const key: string = await Deno.readTextFile('./certs/key.pem');


export default defineConfig({
  /**
   * This uses the GITHUB_REPOSITORY environment variable set in GitHub actions
   * to infer your repository name, falling back to the app name chosen when
   * generating your project.
   */
  server: {
    fs: { allow: ['./../'] },
    https: { key, cert },
    proxy: {} //force http1+tls mode
  },
  base: "/" + (process.env.GITHUB_REPOSITORY?.split("/").pop() || "mekgame"),
  plugins: [deno(), react()],
});