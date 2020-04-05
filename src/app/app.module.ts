import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { StatsComponent } from './components/stats/stats.component';
import { SafetyComponent } from './components/safety/safety.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    StatsComponent,
    SafetyComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
