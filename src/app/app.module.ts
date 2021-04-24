import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodayComponent } from './components/today/today.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { HealthComponent } from './components/today/health/health.component';
import { TasksComponent } from './components/today/tasks/tasks.component';
import { TaskEntryComponent } from './components/today/tasks/task-entry/task-entry.component';
import { TaskFormComponent } from './components/forms/task-form/task-form.component';
import { SymptomFormComponent } from './components/forms/symptom-form/symptom-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HealthEntryComponent } from './components/today/health/health-entry/health-entry.component';
import { MedicationsEntryComponent } from './components/today/health/medications-entry/medications-entry.component';
import { MedicationFormComponent } from './components/forms/medication-form/medication-form.component';
import { MonthViewComponent } from './components/calendar/month-view/month-view.component';
import { DayViewComponent } from './components/calendar/day-view/day-view.component';
import { TodayModuleComponent } from './components/home/today-module/today-module.component';
import { SymptomsModuleComponent } from './components/home/today-module/symptoms-module/symptoms-module.component';
import { AnalyticsComponent } from './components/home/analytics/analytics.component';
import { MostCommonSymptomsComponent } from './components/home/analytics/most-common-symptoms/most-common-symptoms.component';
import { BusiestDayComponent } from './components/home/analytics/busiest-day/busiest-day.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoModuleComponent } from './components/home/today-module/todo-module/todo-module.component';
import { MedicationsModuleComponent } from './components/home/today-module/medications-module/medications-module.component';
import { DateTileComponent } from './components/calendar/month-view/date-tile/date-tile.component';
import { MedicationInfoComponent } from './components/info-popups/medication-info/medication-info.component';
import { TaskInfoComponent } from './components/info-popups/task-info/task-info.component';
import { SymptomInfoComponent } from './components/info-popups/symptom-info/symptom-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    TodayComponent,
    HomeComponent,
    CalendarComponent,
    HealthComponent,
    TasksComponent,
    TaskEntryComponent,
    TaskFormComponent,
    SymptomFormComponent,
    HealthEntryComponent,
    MedicationsEntryComponent,
    MedicationFormComponent,
    MonthViewComponent,
    DayViewComponent,
    TodayModuleComponent,
    SymptomsModuleComponent,
    AnalyticsComponent,
    MostCommonSymptomsComponent,
    BusiestDayComponent,
    HeaderComponent,
    TodoModuleComponent,
    MedicationsModuleComponent,
    DateTileComponent,
    MedicationInfoComponent,
    TaskInfoComponent,
    SymptomInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
