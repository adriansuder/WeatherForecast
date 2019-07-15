import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatDialogModule} from '@angular/material';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ResultPageComponent } from './result-page/result-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureConverterPipe } from './temperature-converter.pipe';
import { DecimalConverterPipe } from './decimal.pipe';
import { RouterModule } from '@angular/router';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { aboutDialogComponent } from './about-dialog/about-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultPageComponent,
    HomePageComponent,
    TemperatureConverterPipe,
    DecimalConverterPipe,
    aboutDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    NgxPageScrollCoreModule,
    MatDialogModule
  ],
  entryComponents: [aboutDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
