import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, RouterLink } from "@angular/router";


const routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home',
        },
    },
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        RouterLink
    ]
})
export class HomeModule { }
