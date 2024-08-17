import { Component } from '@angular/core';
import { HomePageComponent } from '../../../../../home-ui/src/public-api';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
