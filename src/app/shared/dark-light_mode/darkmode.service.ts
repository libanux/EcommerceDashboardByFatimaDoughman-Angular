import { Injectable } from '@angular/core';
import { AgChartBackground,} from 'ag-charts-community';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

constructor() { }
 private isDarkModeSubject = new BehaviorSubject<boolean>(false);
    isDarkMode$ = this.isDarkModeSubject.asObservable();


    toggleDarkMode() {
      const newValue = !this.isDarkModeSubject.value;
      this.isDarkModeSubject.next(newValue);
    }



}
