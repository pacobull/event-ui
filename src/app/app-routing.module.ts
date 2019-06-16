import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomePageComponent } from './home-page/home-page.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'profile', component: ProfileDetailComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }