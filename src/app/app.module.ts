import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {WatchlistComponent} from './components/watchlist/watchlist.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {appRoutes} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WatchlistComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
