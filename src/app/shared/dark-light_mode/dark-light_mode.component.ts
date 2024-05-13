import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DarkmodeService } from './darkmode.service';

@Component({
  selector: 'app-dark-light_mode',
  templateUrl: './dark-light_mode.component.html',
  styleUrls: ['./dark-light_mode.component.scss'],
  standalone:true,
  imports:[FormsModule]
})
export class DarkLight_modeComponent implements OnInit {
  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit() {

  }

  toggleDarkMode() {
      this.darkModeService.toggleDarkMode();
  }
}
