import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class HomeModule { }
