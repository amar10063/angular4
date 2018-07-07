import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import {DataService} from './data.service';
import { FirebaseComponent } from './firebase/firebase.component';
import {FirebaseService} from './firebase.service';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    FirebaseComponent,
    ContactusComponent,
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
         {
            path: 'directory',
            component: DirectoryComponent
         },
         {
            path: 'home',
            component: HomeComponent
         },
         {
            path: 'firebase',
            component: FirebaseComponent
         },
         {
            path: 'contactus',
            component: ContactusComponent
         },
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'dashboard',
            component: DashboardComponent 
         }
      ])
  ],
  providers: [DataService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
