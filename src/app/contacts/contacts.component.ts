import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public worker1Status: number; // 0 - idle, 1 - progress, 2 - finished, 3 - crashed
  public worker2Status: number;
  public worker3Status: number;
  public worker3Progress: number;
  constructor() { }

  ngOnInit(): void {
  }

  public startParallel(): void {
    this.worker1Status = 0;
    this.worker2Status = 0;

    this.longPromise(2).then(() => {
      console.log('1promise finished successfully!');
      this.worker1Status = 2;
    }).catch(() => {
      console.warn('something wrong happened!');
      this.worker1Status = 3;
    }).finally(() => {
      console.log('exit 0');
    });
    this.worker1Status = 1;

    this.longPromise(1).then(() => {
      console.log('1promise finished successfully!');
      this.worker2Status = 2;
    }).catch(() => {
      console.warn('something wrong happened!');
      this.worker2Status = 3;
    }).finally(() => {
      console.log('exit 0');
    });
    this.worker2Status = 1;
  }

  public async startOrdered() {
    this.worker1Status = 0;
    this.worker2Status = 0;
    this.worker1Status = 1;
    try {
      await this.longPromise(4);
      this.worker1Status = 2;
    } catch (e) {
      this.worker1Status = 3;
    }
    
    this.worker2Status = 1;
    await this.longPromise(2);
    this.worker2Status = 2;
  }


  public longCallbackMethod(timeSec, callback) {
    setTimeout( () => {
      console.log('I\'m done');
      callback();
    }, timeSec * 1000);
  }

  public longPromise(timeSec): Promise<void> {
    return new Promise((resolve, reject) => {
      if (timeSec > 10) {
        reject(new Error('something wrong happened'));
        return;
      }
      setTimeout(() => {
        console.log('finished');
        resolve();
      }, timeSec * 1000);
    });
  }

  public hardWork(amount) {
    this.worker3Status = 1;
    this.worker3Progress = 0;
    this.hardWorkObservable(amount).subscribe({
      next: (progress) => { this.worker3Progress = progress },
      complete: () => { this.worker3Status = 2; },
      error: () => { this.worker3Status = 3 }
    });
  }

  public hardWorkObservable(amount) {
    return new Observable<number>((observer) => {
      let progress = 0;
      let interval = setInterval(() => {
        progress+=1;
        observer.next(progress);
        if (amount === progress) {
          clearInterval(interval);
          observer.complete();
        }
        if (progress > 20) {
          clearInterval(interval);
          observer.error();
        }
      }, 100);
    });
  }

}
