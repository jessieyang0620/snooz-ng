import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {TodayComponent} from './components/today/today.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    // {path: '**', pathMatch: 'full', redirectTo: '/welcome'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'today', component: TodayComponent},
    {path: 'home', component: HomeComponent},
    {path: 'calendar', component: CalendarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
