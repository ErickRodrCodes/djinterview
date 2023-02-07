import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentDateService {
  public date = new BehaviorSubject(new Date());
  public dateSubscription = this.date.asObservable();
  public isInitialized = false;

  intialize() {
    if (!this.isInitialized) {
      setInterval(() => {
        this.date.next(new Date());
      }, 1000);

      this.isInitialized = true;
    }
  }

  getServiceDate = () => {
    return this.date.value;
  };
}
