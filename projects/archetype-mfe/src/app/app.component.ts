import { Component, input, Input, output } from '@angular/core';
import { PruebaLazyComponent } from './prueba-lazy/prueba-lazy.component';

@Component({
  selector: 'app-root',
  imports: [PruebaLazyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'archetype-mfe';

  @Input() public normalinput!:string;
  public readonly signalinput = input();

  public readonly notify = output<any>();

  ngOnInit(){
    console.log(this.signalinput())
  }
}
