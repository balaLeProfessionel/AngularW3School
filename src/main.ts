import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessaire pour utiliser #variableDeReference
import { email } from '@angular/forms/signals';

@Component({   //component est une classe qui controle une vue
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="toggle()">Toggle user</button>
    <p>Email: {{ user?.profile?.email || '(none)' }} </p>
  `
})

export class App {
  user: { profile?: { email?: string}  } | undefined = undefined;
  toggle() {
    this.user = this.user ? undefined : { profile: {email: 'ept@empty.sn' } };
}
}
bootstrapApplication(App);
