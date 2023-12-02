import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideModule } from "./modules/aside/aside.module";
import { ContentModule } from "./modules/content/content.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AsideModule,
        AppRoutingModule,
        BrowserModule,
        ContentModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
