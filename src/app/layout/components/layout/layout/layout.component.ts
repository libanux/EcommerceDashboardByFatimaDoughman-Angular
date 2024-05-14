import { Component} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterOutlet } from '@angular/router';
import { ApplicationRoutes } from '../../../../shared/enums/application-routes.enum';
import { DarkLight_modeComponent } from '../../../../shared/dark-light_mode/dark-light_mode.component';
import { CommonModule } from '@angular/common';
import { DarkmodeService } from '../../../../shared/dark-light_mode/darkmode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports:[MatDividerModule,RouterOutlet,DarkLight_modeComponent,CommonModule],
  standalone:true,
})
export class LayoutComponent  {
 activeSection: string = '';
 isDarkMode: boolean = false;
constructor( private router:Router,private darkModeService: DarkmodeService,){}


ngOnInit() {
  this.activeSection = 'dashboard';
  this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.dashboard}`]);
  this.darkModeService.isDarkMode$.subscribe(isDarkMode => {
    this.isDarkMode = isDarkMode;

});
}


  ondashboard(){
    this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.dashboard}`]);
  }

  onanalytics(){
    this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.analytics}`]);

  }

  onproducts(){
    this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.products}`]);

  }
  onorders(){
    this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.orders}`]);

  }
  onlogout(){
    this.router.navigate([`${ApplicationRoutes.Empty}`]);

  }
  setActiveSection(section: string) {
    this.activeSection = section;
    if (section === ApplicationRoutes.analytics) {
      this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.analytics}`]);
    }else if (section === ApplicationRoutes.dashboard) {
      this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.dashboard}`]);
    }else if (section === ApplicationRoutes.products) {
      this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.products}`]);
  }else if (section === ApplicationRoutes.orders) {
    this.router.navigate([`${ApplicationRoutes.layout}/${ApplicationRoutes.orders}`]);
}else if (section === 'logout') {
  this.router.navigate([`${ApplicationRoutes.Empty}`]);
}}
}
