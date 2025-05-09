import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { IonHeader, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private activerouter: ActivatedRoute,


  ) {}


  ngOnInit() {
    this.menuCtrl.enable(false, 'comprador');
    this.menuCtrl.enable(false, 'vendedor');
  }
  usuario: string = '';
  contrasena: string = '';
  rol: string = '';



  // Usuarios estáticos para el ejemplo
  /* listaUsuarios: Usuario[] = [
    { rut: '12345678-9', nombre: 'Angel', apellido: 'Perugini', usuario: 'Angel',telefono: '933336269', correo: 'angel@example.com', contrasena: 'Angel123', rol: 'vendedor' },
    { rut: '87654321-0', nombre: 'Martin', apellido: 'Cox', usuario: 'Martin', telefono: '955555555',correo: 'martin@example.com', contrasena: 'Martin123', rol: 'vendedor' },
    { rut: '13579246-8', nombre: 'Victor', apellido: 'Gonzalez', usuario: 'Victor',telefono: '966665555', correo: 'victor@example.com', contrasena: 'Victor123', rol: 'comprador' }
  ];


/* Agrega usuarios registrados
registrarUsuario(nuevoUsuario: Usuario) {
  this.listaUsuarios.push(nuevoUsuario);
}*/
  /* alertas */
  async alerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alerta_t(titulo: string, mensaje: string) {
    const alert_t = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    });

    await alert_t.present();
  }

}
