import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { iconMockRespose } from './mocks/hero-mocks';

@Component({
  selector: 'lib-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  item:string="Dashboard"
  isActivated!:Object
  mockDatas= iconMockRespose
  toggleHidden() {
    document.getElementById('app-sidebar')?.classList.toggle('hidden');
  }
  toggleMenuHidden() {
    document.getElementById('app-menu')?.classList.toggle('hidden');
  }
  iconClicked(idx: number) {
    this.isActivated = idx; 
    console.log(typeof(this.isActivated, null))
    this.mockDatas.find(val=>{
      if(val.id===idx){
      this.item=this.mockDatas[idx-1].content
    }
    })
  }
}