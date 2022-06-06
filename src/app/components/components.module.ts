import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [BodyComponent, HeaderComponent,FooterComponent],
  imports: [CommonModule],
  exports: [BodyComponent, HeaderComponent,FooterComponent],
})
export class ComponentsModule {}
