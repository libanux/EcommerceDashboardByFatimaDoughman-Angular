import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DarkLight_modeComponent } from '../shared/dark-light_mode/dark-light_mode.component';
import { DarkmodeService } from '../shared/dark-light_mode/darkmode.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginFormGroupService } from './form-group/login-form-group.service';
import { ApplicationRoutes } from '../shared/enums/application-routes.enum';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[CommonModule,TranslateModule,DarkLight_modeComponent,ReactiveFormsModule],
  standalone:true,
  animations: [
    trigger('moveLeftRight', [
      state('left', style({
        transform: 'translateX(-10%)'
      })),
      state('right', style({
        transform: 'translateX(0%)'
      })),
      transition('left => right', animate('200ms ease-out')),
      transition('right => left', animate('200ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnInit {
  fg: FormGroup = new FormGroup({});
  isArabic: boolean = false;
  selectedLanguage: string | undefined;
  public imagePosition: string = ''; // Initial position of the image

  moveLeft() {
    this.imagePosition = 'left';
  }

  moveRight() {
    this.imagePosition = 'right';
  }

  @HostListener('touchstart')
  onTouchStart() {
    this.moveLeft();
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.moveRight();
  }

  constructor(private translate: TranslateService,private darkModeService: DarkmodeService,
   private  loginformgroupservice:LoginFormGroupService, private router:Router
  ) {
    translate.setDefaultLang('en');
  }
  onSelectLanguage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
    this.selectedLanguage = language;
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }




  getFormControl(key: string): FormControl {
    return this.fg.controls[key] as FormControl;
  }

  ngOnInit() :void{
      this.fg = this.loginformgroupservice.getFormGroup();

    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
      this.translate.use(savedLanguage);
    } else {
      this.selectedLanguage = 'en';
      this.translate.use('en');
    }

    if (this.translate) {
      this.translate.onLangChange.subscribe(() => {
        this.isArabic = this.translate.currentLang === 'ar';
      });
    }

 this.darkModeService.isDarkMode$.subscribe(isDarkMode => {
          this.isDarkMode = isDarkMode;

      }); }

  isDarkMode: boolean = false;


loginbtn(){
  this.router.navigate([`${ApplicationRoutes.layout}`]);
  }


}
