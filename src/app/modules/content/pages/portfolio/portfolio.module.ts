import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterOutlet } from "@angular/router";
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const routes = [
    {
        path: '',
        component: PortfolioComponent,
        children: [
            {
                path: 'sicoi',
                loadChildren: () => import('./components/sicoi/sicoi.module').then(m => m.SicoiModule),
                data: {
                    title: 'Sicoi'
                }
            },
            {
                path: 'vnotes',
                loadChildren: () => import('./components/v-notes/v-notes.module').then(m => m.VNotesModule),
                data: {
                    title: 'VNotes'
                }
            }
        ],
        data: {
            title: 'Portfolio'
        }
    }
]

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(routes),
        RouterOutlet,
        RouterLink
    ]
})
export class PortfolioModule { }
