import { Component } from '@angular/core';
import { aboutCardDetails, aboutMocksData, content } from './mocks/about.mocks';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutMockResponse=aboutMocksData
  content: string=content
  cardMock=aboutCardDetails

}
