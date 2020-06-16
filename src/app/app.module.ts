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
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './auth/reducers';
import { ProjectsModule } from './projects/projects.module';

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
    HttpClientModule,
    SharedModule,
    ProjectsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AuthModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot( {
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  providers: [TopicResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
