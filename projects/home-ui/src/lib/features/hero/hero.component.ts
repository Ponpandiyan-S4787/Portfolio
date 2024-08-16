import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  toggleHidden() {
    document.getElementById('app-sidebar')?.classList.toggle('hidden');
  }
  toggleMenuHidden() {
    document.getElementById('app-menu')?.classList.toggle('hidden');
  }
  clicked(idx: any, id: number) {
    console.log(idx, id);
    if (true) {
      console.log('hi');
      document.getElementById('pi-menuItem')?.classList.toggle('hidden');
    }
  }
  // bg-indigo-700

  iconMockDatas = [
    {
      id: 1,
      icon: 'home',
      content: 'Dashboard',
    },
    { id: 2, icon: 'bookmark', content: 'Bookmarks' },
    { id: 3, icon: 'users', content: 'Team' },
    { id: 4, icon: 'comments', content: 'Messages' },
    { id: 5, icon: 'calendar', content: 'Calendar' },
    { id: 6, icon: 'cog', content: 'Settings' },
  ];
}
