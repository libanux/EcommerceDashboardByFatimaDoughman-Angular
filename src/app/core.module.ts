import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ChartCommonModule, ChartComponent } from '@swimlane/ngx-charts';
export function initElfDevTools() {
  return () => {

  };
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [], imports: [AgChartsAngularModule,ChartCommonModule,
    HttpClientModule, CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    HttpClientModule,
    TranslateModule,

  ],

  providers: [DatePipe,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initElfDevTools,

    }
  ]
})
export class CoreModule { }



