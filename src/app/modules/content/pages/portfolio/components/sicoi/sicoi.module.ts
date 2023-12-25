import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SicoiComponent } from "./sicoi.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const routes = [
    {
        path: '',
        component: SicoiComponent,
        data: {
            title: 'Sicoi'
        }
    }
];

@NgModule({
    declarations: [SicoiComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule
    ]
})
export class SicoiModule { }
