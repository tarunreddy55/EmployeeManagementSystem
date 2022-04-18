import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesdashboardeComponent } from './employeesdashboarde/employeesdashboarde.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeelistboardComponent } from './employeelistboard/employeelistboard.component';


@NgModule({
  declarations: [
    AppComponent,
     routingComponents,
     EmployeesdashboardeComponent,
     EmployeelistboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
