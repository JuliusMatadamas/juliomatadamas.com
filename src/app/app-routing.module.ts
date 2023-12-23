import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "./modules/content/pages/error/components/error/error.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/content/pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'Home',
        }
    },
    {
        path: 'index',
        loadChildren: () => import('./modules/content/pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'Home'
        }
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/content/pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'Home'
        }
    },
    {
        path: 'about',
        loadChildren: () => import('./modules/content/pages/about/about.module').then(m => m.AboutModule),
        data: {
            title: 'About'
        }
    },
    {
        path: 'contact',
        loadChildren: () => import('./modules/content/pages/contact/contact.module').then(m => m.ContactModule),
        data: {
            title: 'Contact'
        }
    },
    {
        path: 'portfolio',
        loadChildren: () => import('./modules/content/pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
        data: {
            title: 'Portfolio'
        }
    },
    {
        path: 'services',
        loadChildren: () => import('./modules/content/pages/services/services.module').then(m => m.ServicesModule),
        data: {
            title: 'Services'
        }
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
