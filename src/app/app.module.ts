import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
//material
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
//Firestore
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TopicComponent } from './topic/topic.component';
import { TopicsCardListComponent } from './topics-card-list/topics-card-list.component';
import { TopicResolver } from './services/topic.resolver';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
//NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
//import {metaReducers, reducers} from './reducers';

const routes: Routes = [
  {
      path: 'projects',
      loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
      //canActivate: [AuthGuard]
  },
  {
      path: '**',
      redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopicComponent,
    TopicsCardListComponent,
    TopicDialogComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AuthModule.forRoot(),
    HttpClientModule
  ],
  providers: [TopicResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
