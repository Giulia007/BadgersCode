import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './Topics/topics.component';
import { AboutComponent } from './about/about.component';
import { TopicComponent } from './topic/topic.component';
import { TopicsCardListComponent } from './topics-card-list/topics-card-list.component';
import { TopicResolver } from './services/topic.resolver';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
//NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { EffectsModule } from '@ngrx/effects';
//import {metaReducers, reducers} from './reducers';


const routes: Routes = [
  {
      path: 'projects',
      loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
      //canActivate: [AuthGuard]
  },
/*   {
      path: 'topics',
      loadChildren: () => import('./Topics/topics.module').then(m => m.TopicsModule),
      canActivate: [AuthGuard]
  }, */
  {
      path: '**',
      redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicsComponent,
    AboutComponent,
    TopicComponent,
    TopicsCardListComponent,
    TopicDialogComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AuthModule.forRoot(),
    HttpClientModule,
    SharedModule,
    EffectsModule.forRoot([])
  ],
  providers: [TopicResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
