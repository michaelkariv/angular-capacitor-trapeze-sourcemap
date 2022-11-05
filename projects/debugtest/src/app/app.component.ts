import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'debugtest';

  constructor(
  ) {
  }

  ngOnDestroy(): void {
  }

   ngOnInit(): void {
   console.log('hello world');
   }
  }

