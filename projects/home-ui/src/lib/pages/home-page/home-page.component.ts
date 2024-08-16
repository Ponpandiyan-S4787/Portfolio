import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';

@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
