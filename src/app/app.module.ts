import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenti/home/home.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { ClickTycoonComponent } from './componenti/click-tycoon/click-tycoon.component';
import { MavenApiRestComponent } from './componenti/maven-api-rest/maven-api-rest.component';
import { provideHttpClient } from '@angular/common/http';
import { FetchMavenApiService } from './servizi/fetch-maven-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ClickTycoonComponent,
    MavenApiRestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [provideHttpClient(), FetchMavenApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
