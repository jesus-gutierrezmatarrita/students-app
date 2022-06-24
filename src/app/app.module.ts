import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddValidateComponent } from './student-add-validate/student-add-validate.component';
import { StudentAddComponent } from './student-add/student-add.component';

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: 'student-add-validate',
    component: StudentAddValidateComponent,
    data: {title: 'Student Add Validate'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddValidateComponent,
    StudentAddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }