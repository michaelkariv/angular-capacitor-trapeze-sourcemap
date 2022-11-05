import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {from, Observable, map, take} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'debugtest';
  public text$ = from('');

  constructor(
    public http: HttpClient
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('hello world');
  }

  public onClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.text$ = this.getMap();
  }

  public getMap(): Observable<string> {
    const url = 'http://localhost/main.js.map';
    // const headers = new HttpHeaders().set('X-Kariv', 'test');
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(url, {
      headers,
      reportProgress: false,
      observe: 'body',
      responseType: 'text'
    }).pipe(
      take(1),
      map((response) => {
        return 'Fetched from ' + url + "\n" + response;
        // return 'MAP FAKE';
      })
    );
  }

}

