import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.page.html',
  styleUrls: ['./bye.page.scss'],
})
export class ByePage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Bye init", NgZone.isInAngularZone());
  }

  ngOnDestroy(): void {
    console.log("Bye destroy", NgZone.isInAngularZone());
  }

}
