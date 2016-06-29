import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MainComponent } from './app/components/main'
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';


import { provideStore } from '@ngrx/store';
import { authenticationReducer } from './app/reducers/authentication';
import { classReducer } from './app/reducers/class';

var store:Object = {authentication:authenticationReducer,class:classReducer}

bootstrap(MainComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS, provideStore(store)]    
);

