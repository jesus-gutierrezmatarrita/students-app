import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }