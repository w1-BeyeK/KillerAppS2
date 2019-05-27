import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
    public apiEndpoint = 'https://localhost:44317/api';
}

export const APP_DI_CONFIG: AppConfig = {
    apiEndpoint: 'https://localhost:44317/api'
};

@NgModule({
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})
export class AppConfigModule { }
