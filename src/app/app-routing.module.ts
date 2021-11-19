import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZarOyunuComponent } from './zar-oyunu/zar-oyunu.component';

const routes: Routes = [
  {
    path: '',
    component: ZarOyunuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
