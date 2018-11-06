import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridList } from '@angular/material';
import { TilesComponent } from './tiles/tiles.component';
import { MatGridListModule } from "@angular/material";




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TilesComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
