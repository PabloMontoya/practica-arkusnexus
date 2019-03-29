import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "photos", loadChildren: './modules/photos/photos.module#PhotosModule' },
  { path: "admin", loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: "signup", loadChildren: './modules/signup/signup.module#SignupModule' },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
