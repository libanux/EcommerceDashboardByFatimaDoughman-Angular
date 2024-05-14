import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../../../../shared/dark-light_mode/darkmode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class ProductsComponent implements OnInit {

  isDarkMode: boolean = false;
  ngOnInit() {
    this.darkmodeservice.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
  })
  }

  products: {
    id: number,title: string,image: string,description: string,price: number,sizes: string[],availability: string,averageRating: number,percent: number,warranty: string }[] =
      [
        {
          id: 1, title: "Product 1", image: "assets/bag.png",description: "Description of Product 1",price: 100,sizes: ["S", "M", "L"],percent: 20,availability: "In Stock",averageRating: 4.5,warranty: "1 year warranty"
        },  {
          id: 1, title: "Product 1", image: "assets/shoes.png",description: "Description of Product 1",price: 100,sizes: ["S", "M", "L"],percent: 20,availability: "In Stock",averageRating: 4.5,warranty: "1 year warranty"
        },
        {
          id: 1, title: "Product 1", image: "assets/gloves.png",description: "Description of Product 1",price: 100,sizes: ["S", "M", "L"],percent: 20,availability: "In Stock",averageRating: 4.5,warranty: "1 year warranty"
        },
        {
          id: 1, title: "Product 1", image: "assets/bag.png",description: "Description of Product 1",price: 100,sizes: ["S", "M", "L"],percent: 20,availability: "In Stock",averageRating: 4.5,warranty: "1 year warranty"
        },
        {
          id: 1, title: "Product 1", image: "assets/gloves.png",description: "Description of Product 1",price: 100,sizes: ["S", "M", "L"],percent: 20,availability: "In Stock",averageRating: 4.5,warranty: "1 year warranty"
        },
        {
          id: 1, title: "Product 1", image: "assets/shoes.png",description: "Description of Product 1",price: 100,sizes: ["S", "M", "L"],percent: 20,availability: "In Stock",averageRating: 4.5,warranty: "1 year warranty"
        },



      ]
  filteredProducts: { image: string, title: string,   id: number, price: number, sizes: string[] ,availability: string,averageRating: number,percent: number,warranty: string }[] = [];

  constructor(private darkmodeservice:DarkmodeService) {

    this.filteredProducts = this.products;
  }

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


