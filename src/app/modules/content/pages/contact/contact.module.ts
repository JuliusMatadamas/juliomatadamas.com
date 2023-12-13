import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})

export class ContactModule { }
