import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-mfe1-wrapper',
  imports: [],
  templateUrl: './mfe1-wrapper.component.html',
  styleUrl: './mfe1-wrapper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Mfe1WrapperComponent {

  protected infoForMfe = signal('Alejandro');

  async ngOnInit() {
    await loadRemoteModule('mfe', './web-components');
  }

  protected modifyInfo(){
    this.infoForMfe.set('Sergio')
  }

  protected printEvent(event:any){
    console.log(event.detail);
    console.log(typeof event.detail)
  }

}
