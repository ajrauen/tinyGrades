import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MainComponent } from './app/components/main'
import { ROUTER_PROVIDERS } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { authenticationReducer } from './app/reducers/authentication';

var store:Object = {authentication:authenticationReducer}

bootstrap(MainComponent,[ROUTER_PROVIDERS,provideStore(store)]    
);

