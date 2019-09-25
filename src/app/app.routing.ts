import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {WatchlistComponent} from './components/watchlist/watchlist.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
];
