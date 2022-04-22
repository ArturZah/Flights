import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkerService } from '../../services/marker.service';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

const modules = [
  MatTableModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSortModule,
  BrowserModule,
  CommonModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

const components = [ScrollTopComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules, CommonModule],
  exports: [...modules, ...components],
  providers: [MarkerService],
})
export class SharedModule {}
