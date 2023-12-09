import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TogglerComponent } from './components/toggler/toggler.component';



@NgModule({
    declarations: [
        AsideComponent,
        LogoComponent,
        NavComponent,
        TogglerComponent
    ],
    exports: [
        AsideComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        FontAwesomeModule,
        RouterLinkActive
    ]
})
export class AsideModule { }
