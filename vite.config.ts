import { defineConfig } from "vite"

export default defineConfig({
  optimizeDeps: {
    include: [
      "slidev-addon-infographic > @antv/infographic"
    ],
  }
})
