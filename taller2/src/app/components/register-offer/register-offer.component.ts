import { Component } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-offer',
  templateUrl: './register-offer.component.html',
  styleUrls: ['./register-offer.component.css']
})
export class RegisterOfferComponent {
  offer: Offer = {
    id: null, // Puedes dejarlo como null ya que normalmente se generará automáticamente en el servidor
    title: '',
    description: '',
    points: '',
    businessId: '' // Asegúrate de proporcionar un valor válido para businessId
  };

  constructor(private registerService: RegisterService) { }

  registerOffer() {
    this.registerService.register(this.offer).subscribe(response => {
      console.log('Oferta registrada con éxito:', response);
      // Limpia el formulario después de un registro exitoso
      this.offer = {
        id: null,
        title: '',
        description: '',
        points: '',
        businessId: ''
      };
    }, error => {
      console.error('Error al registrar la oferta:', error);
    });
  }
}
