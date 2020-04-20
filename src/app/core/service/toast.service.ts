import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  public showSuccess(message: string) {
    this.show(message, 'success', 'Sucesso');
  }

  public showError(message: string) {
    this.show(message, 'danger', 'Erro');
  }

  private async show(message: string, color: string, header: string) {
    const toast = await this.toast.create({
      header,
      message,
      color,
      position: "bottom",
      duration: 3000
    });
    toast.present();

  }
}
