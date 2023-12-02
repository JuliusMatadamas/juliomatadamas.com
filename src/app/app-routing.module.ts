import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/content/pages/home/components/home/home.component";
import { AboutComponent } from "./modules/content/pages/about/components/about/about.component";
import { ContactComponent } from "./modules/content/pages/contact/components/contact/contact.component";
import { PortfolioComponent } from "./modules/content/pages/portfolio/components/portfolio/portfolio.component";
import { ServicesComponent } from "./modules/content/pages/services/components/services/services.component";
import { ErrorComponent } from "./modules/content/pages/error/components/error/error.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home',
        }
    },
    {
        path: 'index',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'About'
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            title: 'Contact'
        }
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        data: {
            title: 'Portfolio'
        }
    },
    {
        path: 'services',
        component: ServicesComponent,
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
