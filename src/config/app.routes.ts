import { Routes } from '@angular/router';
// import { ErrorComponent } from './error.component';
import { mainComponent } from '../app/main.component';
import { AppComponent } from '../app/app.component';
//google login
export const routes: Routes = [
  { path: 'main', component: AppComponent },
  { path: 'main1', component: mainComponent },
  { path: '', redirectTo: '/main1', pathMatch: 'full' },
];
