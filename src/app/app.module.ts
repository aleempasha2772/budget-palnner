import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetPlannerComponent } from './budget-planner/budget-planner.component';
import { LoginComponent } from './budget-planner/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetPlannerComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
