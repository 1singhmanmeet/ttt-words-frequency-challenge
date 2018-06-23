import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrequencyComponent} from './frequency/frequency.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'frequency', component: FrequencyComponent },
  { path: '',redirectTo:'/frequency',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}