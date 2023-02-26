import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './projects/global-site/src',
  projectName: 'global-site',
  distFolder: './dist/global-site/browser', // output directory of your Angular build artifacts
  outDir: './dist/global-site/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  puppeteerLaunchOptions: {
    timeout: 30000,
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
  routes: {},
};
