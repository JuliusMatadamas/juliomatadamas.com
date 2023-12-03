import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        AsideComponent,
        LogoComponent,
        NavComponent
    ],
    exports: [
        AsideComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        FontAwesomeModule
    ]
})
export class AsideModule { }