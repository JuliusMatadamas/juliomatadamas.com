import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

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
        FontAwesomeModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})

export class ContactModule { }
