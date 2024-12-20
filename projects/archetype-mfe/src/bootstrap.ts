import { NgZone } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

(async () => {
  const app = await createApplication({
    providers: [
      (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone } : [],
    ],
  });

  const mfeRoot = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe-root', mfeRoot);
})();
