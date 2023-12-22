import { homeRouting } from './home.routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    homeRouting,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class HomeModule { }
