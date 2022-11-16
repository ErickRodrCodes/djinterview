import { BehaviorSubject } from 'rxjs';

export class CurrentDateService {
  public date = new BehaviorSubject(new Date());
  public dateSubscription = this.date.asObservable();
  public isInitialized = false;

  intialize() {
    if (!this.isInitialized) {
      this.dateSubscription.subscribe((newDate) => {
        console.log(newDate.toLocaleTimeString());
      });

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
