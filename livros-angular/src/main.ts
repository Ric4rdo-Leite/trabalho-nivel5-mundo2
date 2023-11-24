import { enableProdMode } from '@angular/core'; // Correção na importação do módulo

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
if (enableProdMode) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AbortController)
  .catch(err => console.error(err));
