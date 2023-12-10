import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterLink } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    AboutComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        FontAwesomeModule
    ]
})
export class AboutModule { }
