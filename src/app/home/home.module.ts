import { homeRouting } from './home.routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    homeRouting,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
