import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferTableComponent } from './components/offer-table/offer-table.component';

const routes: Routes = [
{ path: 'offers', redirectTo: '/business/offers' },
{ path: 'offers', redirectTo: '/offers/new' },
{ path: 'business/offers',  component: OfferTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
