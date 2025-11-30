import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({   //component est une classe qui controle une vue
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  // styles: [`
  // .toobar {display:flex; gap:}
  //   `]
  template: `
    <h3>Template Reference Variables (#var)</h3>
    <div class="toolbar">
    <input #box type="text" placeholder="Type something" (input)="current= box.value"/>
    <button (click)="read(box.value)">Read Value</button>
    <button (click)="box.focus()">Focus input</button>
    <span style="margin-left:8px; color:#666">lenght={{box.value?.length || 0 }} </span>
    </div>
    <p>Current:{{current || ('empty')}} </p>
  `
})

export class App {
  current = 'Baba Ndiaye';
  read(val:string) {this.current = val ?? ';'}
}

bootstrapApplication(App);
