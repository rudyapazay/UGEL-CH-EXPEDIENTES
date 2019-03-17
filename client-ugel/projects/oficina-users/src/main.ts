import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//import { ExpedienteModule} from 'modules/expediente-module/expediente.module';
import { environment } from './environments/environment';
import { ExpedienteModule } from 'modules/expediente-module/expediente.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
