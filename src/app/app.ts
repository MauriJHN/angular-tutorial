import {Component} from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, KeyValuePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  demos = {
    'Housing Demo': {
      url: 'housing-demo',
      imgUrl: '/public/housing-logo.svg'
    },
    'Collapsable Demo': {
      url: 'collapsable-demo',
      imgUrl: '',
    },
  }
}
