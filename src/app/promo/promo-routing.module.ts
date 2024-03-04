import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoComponent } from "./layout/promo.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PromoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
