import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TopicComponent } from './topic/topic.component';
import { TopicResolver} from "./services/topic.resolver";
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "about",
    component: AboutComponent
  },

  {
    path: "topics/:topicUrl",
    component: TopicComponent,
    resolve: {
      topic: TopicResolver
    }
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
