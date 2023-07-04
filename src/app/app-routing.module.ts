import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'itens' //sempre vai carregar quando só tiver a porta 4200
  },
  {
    path: 'itens',
    loadChildren: () => import('./layout/lista-clientes/lista-clientes.module').then(modulo => modulo.ListaClientesModule)
  },
  {
    path: 'cartao',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo:'login', pathMatch:'full'},
      { path: 'login', component: LoginComponent},
      { path: 'create-account', component: CreateAccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
