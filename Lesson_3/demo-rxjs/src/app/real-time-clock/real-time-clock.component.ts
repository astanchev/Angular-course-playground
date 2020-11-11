import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-real-time-clock',
  templateUrl: './real-time-clock.component.html',
  styleUrls: ['./real-time-clock.component.css']
})
export class RealTimeClockComponent implements OnInit {
  timeData: string;

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(
        startWith(-1),
        map(() => new Date()),
        map(date => {
          const h = +date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
          const m = +date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
          let s = +date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
          return `${h}:${m}:${s}`;
        })
      )
      .subscribe(time => {
        this.timeData = time;
      });
  }

}
