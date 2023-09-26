import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { OfferTableComponent } from './components/offer-table/offer-table.component';

const routes: Routes = [
{ path: 'offers', redirectTo: '/business/offers' },
{ path: 'business/offers',  component: OfferTableComponent },
{ path: 'admin/offers/edit/:id', component: UpdateOfferComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
