import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MainComponent } from './app/components/main'
import { ROUTER_PROVIDERS } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { authenticationReducer } from './app/reducers/authentication';
import { LocalStorageService } from './app/services/local-storage.service';

var store:Object = {authentication:authenticationReducer}

bootstrap(MainComponent,[ROUTER_PROVIDERS,LocalStorageService,provideStore(store)]    
);

