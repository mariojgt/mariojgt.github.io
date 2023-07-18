import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  site: 'https://mariojgt.github.io'
  // base: '/mariojgt.github.io',
  ,
  integrations: [partytown()]
});