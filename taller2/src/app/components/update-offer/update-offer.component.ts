import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from 'src/app/services/update.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent {

  offer: any;
  isEditing = false;
  updatedTitle = '';
  updatedDescription = '';
  updatedPoints = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: UpdateService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.offerService.getOfferById(id).subscribe(data => {
        this.offer = data;

      });
    });
  }


 startEditing() {
  this.isEditing = true;
  this.updatedTitle = this.offer.title;
  this.updatedDescription = this.offer.description;
  this.updatedPoints = this.offer.points;
}


  saveChanges() {


    this.offer.title = this.updatedTitle;
    this.offer.description = this.updatedDescription;
    this.offer.points = this.updatedPoints;

    if(this.updatedPoints>'100'){
      console.log('error el numero es mayor a 100')
      this.openSnackBar('Los puntos deben ser menor o igual a 100','OK')
    }else{
      this.isEditing = false;
      this.offerService.updateOffer(this.offer.id, {
        title: this.updatedTitle,
        description: this.updatedDescription,
        points: this.updatedPoints
      }).subscribe(response => {
      });
    }

  }


cancelEditing() {
  this.isEditing = false;
}

  /**
   * Abre la alerta de snackbar
   * @param message Mensaje a mostrar
   * @param action Acción
   */
  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, { duration: 5_000 });
  }

}
