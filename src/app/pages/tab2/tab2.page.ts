import { Component } from '@angular/core';
import { DataLocalService} from '../../services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocalService: DataLocalService) {}


  /*enviarCorreo(){
  	console.log('Enviar Correo');
  	//this.dataLocalService.enviarCorreo();
  }*/

  abrirRegistro(registro){
  	console.log('Registro', registro);
  	this.dataLocalService.abrirRegistro(registro);
  }

}
