import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideModule } from "./modules/aside/aside.module";
import { ContentModule } from "./modules/content/content.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AsideModule,
        AppRoutingModule,
        BrowserModule,
        ContentModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000, // Duración en milisegundos
            positionClass: 'toast-top-right', // Posición de las notificaciones
            preventDuplicates: true,
        })
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
