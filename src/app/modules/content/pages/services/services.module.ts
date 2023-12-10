import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        ServicesComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class ServicesModule { }
