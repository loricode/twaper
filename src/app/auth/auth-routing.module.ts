import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   
  { path:'',
    children:[
      { path:'login', component:LoginComponent },
      { path:'register', component:RegisterComponent},
      { path:'recover', component:RecoverAccountComponent } 
      
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
