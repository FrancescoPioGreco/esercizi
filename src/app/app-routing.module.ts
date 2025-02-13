import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ClickTycoonComponent } from './componenti/click-tycoon/click-tycoon.component';
import { MavenApiRestComponent } from './componenti/maven-api-rest/maven-api-rest.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'click-tycoon', component: ClickTycoonComponent},
  {path: 'maven-api-rest', component: MavenApiRestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
