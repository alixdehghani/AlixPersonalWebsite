import { NgModule } from "@angular/core";
import { NavbarComponent } from "./header/navbar.component";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [NavbarComponent],
    imports: [MatButtonModule],
    exports: [NavbarComponent]
})
export class CoreModule { }