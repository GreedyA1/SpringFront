import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatDialogModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatTabsModule,
  MatPaginatorModule, MatSortModule, MatInputModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatProgressBarModule, MatBadgeModule, MatChipsModule,
  MatSnackBarModule, MatButtonToggleModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule, MatDialogModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatTabsModule,
    MatPaginatorModule, MatSortModule, MatInputModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatProgressBarModule, MatBadgeModule, MatSnackBarModule,
    MatSlideToggleModule, MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
