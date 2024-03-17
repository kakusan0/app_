import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './config/environment.prod';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './config/app.routes'; // アプリケーションのルート設定
import { mainComponent } from './app/main.component';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
