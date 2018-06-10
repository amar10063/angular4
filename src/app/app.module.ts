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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    FirebaseComponent

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
         }
      ])
  ],
  providers: [DataService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
