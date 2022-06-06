import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BodyComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [BodyComponent, HeaderComponent],
})
export class ComponentsModule {}
