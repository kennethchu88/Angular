import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import {CreateComponent} from './components/create/create.component';
import {EditComponent} from './components/edit/edit.component';
import {ListComponent} from './components/list/list.component';



const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {}