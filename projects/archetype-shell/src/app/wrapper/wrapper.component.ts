import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ElementRef, inject, input, OnInit } from '@angular/core';
import { WrapperConfig } from './wrapper-config';

@Component({
  standalone: true,
  template: '',
})
export class WrapperComponent implements OnInit {
  
  private readonly _elm = inject(ElementRef);

  public readonly config = input.required<WrapperConfig>()

  async ngOnInit() {
    const { exposedModule, remoteName, tagname, inputs } = this.config();
    
    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(tagname);
    if(inputs){
      Object.keys(inputs).forEach(inputKey => root.setAttribute(inputKey,inputs[inputKey]));
    }

    this._elm.nativeElement.appendChild(root);
  }
}
