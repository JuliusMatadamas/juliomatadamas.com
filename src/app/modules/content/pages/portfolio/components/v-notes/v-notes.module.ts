import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VNotesComponent } from "./v-notes.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const routes = [
    {
        path: '',
        component: VNotesComponent,
        data: {
            title: 'VNotes'
        }
    }
];

@NgModule({
    declarations: [VNotesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule
    ]
})
export class VNotesModule { }
