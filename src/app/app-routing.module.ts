import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cell-chart-demo'
},
{
    path: 'cell-chart-demo',
    component: AppComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
