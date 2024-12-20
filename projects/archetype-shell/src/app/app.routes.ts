import { Routes } from '@angular/router';
import { Mfe1WrapperComponent } from './mfe1-wrapper/mfe1-wrapper.component';
import { WrapperConfig } from './wrapper/wrapper-config';
import { WrapperComponent } from './wrapper/wrapper.component';

export const routes: Routes = [
  {
    path: 'mfe',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe',
        exposedModule: './web-components',
        tagname: 'mfe-root',
        inputs: {
          normalinput: '5'
        }
      } as WrapperConfig,
    },

  },
  {
    path: 'mfe-container',
    component: Mfe1WrapperComponent
  }

  /*     {
          path: 'mfe',
          loadComponent: () =>
              loadRemoteModule('mfe', './Component').then((m) => m.AppComponent),
      }, */
];
