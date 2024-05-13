import { Injectable } from '@angular/core';
import { AgChartThemeName } from 'ag-charts-community';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  activeTheme: AgChartThemeName = 'ag-default';
constructor() { }
 private isDarkModeSubject = new BehaviorSubject<boolean>(false);
    isDarkMode$ = this.isDarkModeSubject.asObservable();


    toggleDarkMode() {
      const newValue = !this.isDarkModeSubject.value;
      this.isDarkModeSubject.next(newValue);
      this.activeTheme = newValue ? 'ag-material-dark' : 'ag-default';
    }
}

