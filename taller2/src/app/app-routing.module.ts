import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';

const routes: Routes = [
  { path: 'admin/offers/edit/:id', component: UpdateOfferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
