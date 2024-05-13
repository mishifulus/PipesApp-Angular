import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localeEsCA from '@angular/common/locales/es-MX';
import localeEsMX from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMX);
registerLocaleData(localeEsCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-MX' //IDIOMA POR DEFECTO
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
