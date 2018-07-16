import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login/login.component';
import {AuthGuardService} from './login/guards/auth-guard.service';
import {HomeComponent} from './sip/home/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
