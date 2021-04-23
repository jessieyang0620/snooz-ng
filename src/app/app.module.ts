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
import { TodayHeaderComponent } from './components/today/today-header/today-header.component';
import { TaskEntryComponent } from './components/today/tasks/task-entry/task-entry.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { SymptomFormComponent } from './components/symptom-form/symptom-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HealthEntryComponent } from './components/today/health/health-entry/health-entry.component';
import { MedicationsEntryComponent } from './components/today/health/medications-entry/medications-entry.component';
import { MedicationFormComponent } from './components/medication-form/medication-form.component';


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
    TodayHeaderComponent,
    TaskEntryComponent,
    TaskFormComponent,
    SymptomFormComponent,
    HealthEntryComponent,
    MedicationsEntryComponent,
    MedicationFormComponent
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
