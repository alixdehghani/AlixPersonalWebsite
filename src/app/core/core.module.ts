import { NgModule } from '@angular/core';
import { NavbarComponent } from './header/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [MatButtonModule, MatIconModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
