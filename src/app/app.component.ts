import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core.module';
import { BrowserModule } from '@angular/platform-browser';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http ,'./assets/i18n/','.json');
}

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, HttpClientModule,RouterOutlet,CoreModule,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'StagProject';
}

