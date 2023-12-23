import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const routes = [
    {
        path: '',
        component: ServicesComponent,
        data: {
            title: 'Services'
        }
    }
];

@NgModule({
    declarations: [
        ServicesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule
    ]
})
export class ServicesModule { }
