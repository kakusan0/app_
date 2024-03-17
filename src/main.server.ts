import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './config/app.config.server';
import { mainComponent } from './app/main.component';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
