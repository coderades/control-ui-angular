import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openedSideNav(event: boolean) {
    this.opened = event;
  }
}
