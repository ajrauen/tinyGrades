import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MainComponent } from './app/components/main'
import { ROUTER_PROVIDERS } from '@angular/router';


bootstrap(MainComponent,[ROUTER_PROVIDERS]);

