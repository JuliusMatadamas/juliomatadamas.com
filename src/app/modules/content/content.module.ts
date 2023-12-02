import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from "./pages/home/home.module";
import { AboutModule } from "./pages/about/about.module";
import { ContactModule} from "./pages/contact/contact.module";
import { ErrorModule } from "./pages/error/error.module";
import { PortfolioModule } from "./pages/portfolio/portfolio.module";
import { ServicesModule } from "./pages/services/services.module";
import { MainComponent } from './pages/main.component';
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [

        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        AboutModule,
        CommonModule,
        ContactModule,
        ErrorModule,
        HomeModule,
        PortfolioModule,
        ServicesModule,
        RouterOutlet
    ]
})
export class ContentModule { }
