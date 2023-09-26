import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { OfferTableComponent } from './components/offer-table/offer-table.component';
import { RegisterOfferComponent } from './components/register-offer/register-offer.component';

const routes: Routes = [
{ path: 'business/offers',  component: OfferTableComponent },
{path: 'admin/offers/new', component:RegisterOfferComponent},
{ path: 'admin/offers/edit/:id', component: UpdateOfferComponent },
{path:'', pathMatch: 'full', redirectTo:'business/offers'},
{path:'**', pathMatch:'full', redirectTo:'business/offers'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
