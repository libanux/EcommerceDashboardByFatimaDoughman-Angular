import { Component,  OnInit} from '@angular/core';
import { AgChartsAngular } from "ag-charts-angular";
import { AgChartOptions, AgChartBackground, AgPieSeriesOptions } from "ag-charts-community";
 import { MatTableModule} from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { DarkmodeService } from '../../../../shared/dark-light_mode/darkmode.service';
import { Observable, Subscription } from 'rxjs';
import { MatDivider } from '@angular/material/divider';

 export interface PeriodicElement {
  IDcustomer: string;
  Customername: string;
  city: string;
  orderdate:Date;
  status: string;
  account:string;
  position:number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [AgChartsAngular,MatTableModule,DatePipe,CommonModule,MatDivider],
  standalone:true
})
export class DashboardComponent implements OnInit{
  options1: AgChartOptions;
  options2: AgChartOptions;
  options3!: AgChartOptions;
  options4!: AgChartOptions;
  chartOptions: any;
  pieChartData: any[] | undefined;
  displayedColumns: string[] = ['position', 'IDcustomer','Customername', 'city', 'orderdate', 'status', 'account',];
  ELEMENT_DATA: PeriodicElement[] = [];
  isDarkMode: boolean = false;
  isDarkMode$!: Observable<boolean> ;
  darkModeSubscription: Subscription | undefined;



  constructor( private darkModeService: DarkmodeService,) {

    this.filteredProducts = this.products;

    this.ELEMENT_DATA = [
      { position: 1, Customername: 'Hydrogen', city:" lebanon", orderdate: new Date(), status: 'Active', account: 'Acc1',IDcustomer: '#5431'
      },
      { position: 2, Customername: 'Helium', city:"us", orderdate: new Date(), status: 'Inactive', account: 'Acc2',
        IDcustomer: '#8373'
      },
      { position: 3, Customername: 'Lithium', city: "italy", orderdate: new Date(), status: 'Active', account: 'Acc3',
        IDcustomer: '#5433'
      },
      {position: 4, Customername: 'Beryllium', city: "lebanon", orderdate: new Date(), status: 'Inactive', account: 'Acc4',
        IDcustomer: '#2231'
      },
      { position: 5, Customername: 'Boron', city: "beirut", orderdate: new Date(), status: 'Active', account: 'Acc5',
        IDcustomer: '#5951'
      },
      { position: 6, Customername: 'Carbon', city: "nabatieh", orderdate: new Date(), status: 'Inactive', account: 'Acc6',
        IDcustomer: '#7841'
      },
    ];



    this.options1 = {

      data: this.getData1(),
      series: [
        {
          type: "area",
          xKey: "day",
          yKey: "subscriptions",
          fill: this.isDarkMode ? '#404040' : '#FFC000',
        },
      ],
      width: 250,
      height: 160,
    };

    this.options2 = {

      data: this.getData2(),
      series: [
        {
          type: "area",
          xKey: "day",
          yKey: "subscriptions",
          fill:"#FF0000",
        },
      ],
      width: 250,
      height: 160,
    };

    this.options3 = {
     data: this.getData3(),
     series: [{
      title: { text: 'Sales by Category' },
       type: 'pie',
       angleKey: 'subscriptions',
       fills: ['#c5b4db','#70f0e2','#91d020','#ecf0f1','#F77474'],
       strokes: ['white']

     } as AgPieSeriesOptions],
     width: 250,
     height: 250
   };

   this.options4 = {
    data: this.getData4(),
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "revenue",
        marker: {
          enabled:false,
        },

      },
      {
        type: "line",
        xKey: "date",
        yKey: "order",
        marker: {
          enabled:false,
        },

      }
    ],
    title: {
    text: 'Revenue vs Order',
    fontWeight: 'bold',
    textAlign:'left',
     },

    axes: [
      {
        type: 'time',
        title: { text: "" },
        label: { format: '%b'},

      },
      {
       position: 'left',
       type: 'number',
       min:0,
       max:1000,
      }
    ],
    width: 800,
    height: 300,
  };
}


ngOnInit(): void {

  this.darkModeService.isDarkMode$.subscribe(isDarkMode => {
    this.updateChartTheme(isDarkMode);
  });
}

updateChartTheme(isDarkMode: boolean): void {
  const chartBackground: AgChartBackground = {
    fill: isDarkMode ? '#232323' : '#ffffff',
    visible: true,
  };
  const areaFillColor = isDarkMode ? '#C1EF00' : '#04B900';
  this.options1.background = chartBackground;
  this.options2.background = chartBackground;
  this.options3.background = chartBackground;
  this.options4.background = chartBackground;

  this.options1.series?.forEach(series => {
    if (series.type === 'area') {
      series.fill = areaFillColor;}




  });


  this.options1 = { ...this.options1 };
  this.options2 = { ...this.options2 };
  this.options3 = { ...this.options3 };
  this.options4 = { ...this.options4 };

}


  getData1() {
    return [
      { day: "M", subscriptions: 2 },
      { day: "T", subscriptions: 320 },
      { day: "W", subscriptions: 222 },
      { day: "Th", subscriptions: 322 },
      { day: "F", subscriptions: 322 },
      { day: "Su", subscriptions: 302 },
      { day: "Sa", subscriptions: 400 },
    ];
  }

  getData2() {
    return [
      { day: "M", subscriptions: 10 },
      { day: "T", subscriptions: 100 },
      { day: "W", subscriptions: 50 },
      { day: "Th", subscriptions: 200 },
      { day: "F", subscriptions: 150 },
      { day: "Su", subscriptions: 300 },
      { day: "Sa", subscriptions: 250 },
    ];}
    getData3() {
      return [
        { label: "Women", subscriptions: 30 },
        { label: "Men", subscriptions: 20 },
        { label: "Kids", subscriptions: 25 },
        { label: "Home", subscriptions: 15 },
        { label: "Wellness", subscriptions: 10 },
      ];
    }


    keyItems = [
      { label: 'Women', color: '#c5b4db' },
      { label: 'Men', color: '#70f0e2' },
      { label: 'Kids', color: '#ecf0f1' },
      { label: 'Home', color: '#91d020' },
      { label: 'Wellness', color:'#F77474' },
    ];


    getData4() {
      return [
        { date: new Date(2019, 0, 1), revenue: 0, order: 536 },
        { date: new Date(2019, 1, 1), revenue: 535, order: 799 },
        { date: new Date(2019, 2, 1), revenue: 899, order: 783 },
        { date: new Date(2019, 3, 1), revenue: 907, order: 993 },
        { date: new Date(2019, 4, 1), revenue: 213, order: 536 },
        { date: new Date(2019, 5, 1), revenue: 422, order: 799 },
        { date: new Date(2019, 6, 1), revenue: 663, order: 783 },
        { date: new Date(2019, 7, 1), revenue: 752, order: 993 },
        { date: new Date(2019, 8, 1), revenue: 231, order: 536 },
        { date: new Date(2019, 9, 1), revenue: 123, order: 799 },
        { date: new Date(2019, 10, 1), revenue: 768, order: 783 },
        { date: new Date(2019, 11, 1), revenue: 982, order: 993 },
      ]
    }



    products: { image: string, title: string, type: string, percent: number }[] = [
      { image: 'assets/shoes.png', title: 'Speed force', type: 'women', percent: 35 },
      { image: 'assets/bag.png',   title: 'bag', type: 'women', percent: 20 },
      { image: 'assets/shoes.png', title: 'shoes', type: 'women', percent: 15 },
      { image: 'assets/shoes.png', title: 'shoes', type: 'women', percent: 25 },
      { image: 'assets/shoes.png', title: 'shoes', type: 'women', percent: 30 },
      { image: 'assets/shoes.png', title: 'shoes', type: 'women', percent: 30 }
    ];

    filteredProducts: { image: string, title: string, type: string, percent: number }[];

    filterProducts(searchTerm: string): void {
      if (!searchTerm) {
        this.filteredProducts = this.products;
        return;
      }

      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


    onInputChanged(value: string): void {
      if (!value) {
        this.filteredProducts = this.products;
      }
    }
}


