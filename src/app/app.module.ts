import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { StatsComponent } from './components/stats/stats.component';
import { SafetyComponent } from './components/safety/safety.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { VideoComponent } from './components/video/video.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    StatsComponent,
    SafetyComponent,
    VideoComponent,
    ContactComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
