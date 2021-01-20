import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NabvarComponent } from './layout/nabvar/nabvar.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainLayoutComponent, NabvarComponent],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class CoreModule { }
