import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, RouterLink } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const routes = [
    {
        path: '',
        component: AboutComponent,
        data: {
            title: 'About',
        },
    },
];


@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        RouterLink,
        FontAwesomeModule
    ]
})
export class AboutModule { }
