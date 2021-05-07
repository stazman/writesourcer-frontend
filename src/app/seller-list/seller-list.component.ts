import { Component, OnInit } from '@angular/core';
import { Seller } from './seller';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  // create an array of objects
  SellerList: Seller[] = [
    new Seller("Anup", "Kumar", "anup.kumar@luv2code.com", 50000),
    new Seller("John", "Doe", "john.doe@luv2code.com", 40000),
    new Seller("Claire", "Murphy", "claire.murphy@luv2code.com", 90000),
    new Seller("Mai", "Truong", "mai.truong@luv2code.com", 60000)
  ];

  constructor() { }

  ngOnInit() {
  }

}
