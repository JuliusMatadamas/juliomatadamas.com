import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const routes = [
    {
        path: '',
        component: ContactComponent,
        data: {
            title: 'Contact'
        },
    }
];

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule
    ]
})

export class ContactModule { }
