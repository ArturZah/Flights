import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkerService } from '../../services/marker.service';

const modules = [
  MatTableModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  BrowserModule,
  CommonModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [MarkerService],
})
export class SharedModule {}
