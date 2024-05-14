import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DarkmodeService } from '../../../../shared/dark-light_mode/darkmode.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports:[TableModule,CommonModule],
  standalone:true,
})
export class OrdersComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor(private darkModeService: DarkmodeService) { }
  ngOnInit() {
    this.darkModeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  }



  Customer: any[] = [
    { no: 1, Customername: 'John Doe', city: "New York", orderdate: new Date('2024-05-14'), status: 'Active', account: 'JD001', IDcustomer: '#1234' },
    { no: 2, Customername: 'Alice Smith', city: "Los Angeles", orderdate: new Date('2024-05-15'), status: 'Inactive', account: 'AS002', IDcustomer: '#5678' },
    { no: 3, Customername: 'Bob Johnson', city: "Chicago", orderdate: new Date('2024-05-16'), status: 'Active', account: 'BJ003', IDcustomer: '#9101' },
    { no: 4, Customername: 'Emily Brown', city: "Houston", orderdate: new Date('2024-05-17'), status: 'Inactive', account: 'EB004', IDcustomer: '#1121' },
    { no: 5, Customername: 'Michael Wilson', city: "San Francisco", orderdate: new Date('2024-05-18'), status: 'Active', account: 'MW005', IDcustomer: '#3141' },
    { no: 6, Customername: 'Sophia Martinez', city: "Miami", orderdate: new Date('2024-05-19'), status: 'Inactive', account: 'SM006', IDcustomer: '#5161' },
    { no: 7, Customername: 'Jacob Lee', city: "Seattle", orderdate: new Date('2024-05-20'), status: 'Active', account: 'JL007', IDcustomer: '#7181' },
    { no: 8, Customername: 'Olivia Perez', city: "Boston", orderdate: new Date('2024-05-21'), status: 'Inactive', account: 'OP008', IDcustomer: '#9202' },
    { no: 9, Customername: 'William Taylor', city: "Denver", orderdate: new Date('2024-05-22'), status: 'Active', account: 'WT009', IDcustomer: '#2232' },
    { no: 10, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 11, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 12, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 13, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 14, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 15, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 16, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' },
    { no: 17, Customername: 'Emma Anderson', city: "Atlanta", orderdate: new Date('2024-05-23'), status: 'Inactive', account: 'EA010', IDcustomer: '#4242' }
];

}
