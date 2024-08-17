import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { iconMockRespose } from './mocks/hero-mocks';
import { BookmarkComponent } from "../bookmark/bookmark.component";
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'lib-hero',
  standalone: true,
  imports: [CommonModule,DashboardComponent, BookmarkComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isActivated!:Object
  item:string="Dashboard"
  routedFeature="Dashboard"
  mockDatas= iconMockRespose
  toggleHidden() {
    document.getElementById('app-sidebar')?.classList.toggle('hidden');
  }
  toggleMenuHidden() {
    document.getElementById('app-menu')?.classList.toggle('hidden');
  }
  iconClicked(idx: number, route: string) {
    this.isActivated = idx; 
    this.mockDatas.find(val=>{
      if(val.id===idx){
      this.item=this.mockDatas[idx-1].content
      this.routedFeature=route
    }
    })
  }
}