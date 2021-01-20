import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NabvarComponent } from './layout/nabvar/nabvar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainLayoutComponent, NabvarComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
