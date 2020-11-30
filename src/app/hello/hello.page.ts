import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Hello init", NgZone.isInAngularZone());
  }

  ngOnDestroy(): void {
    console.log("Hello destroy", NgZone.isInAngularZone());
  }
}
