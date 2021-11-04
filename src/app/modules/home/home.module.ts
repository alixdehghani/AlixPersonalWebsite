import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./pages/home-page.component";


@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: []
})

export class HomeModule { }