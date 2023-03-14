import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuList = [
    { id: 1, name: 'home', isSelect: true },
    { id: 2, name: 'professional', isSelect: false },
    { id: 3, name: 'experience', isSelect: false },
    { id: 4, name: 'portfolio', isSelect: false },
    { id: 5, name: 'contact', isSelect: false }
  ]
  constructor() { }
  ngOnInit(): void {

  }

  selectMenu(i: number) {
    for (const m of this.menuList) {
      Object.assign(m, { isSelect: false });
    }
    this.menuList[i].isSelect = true;
  }
}
