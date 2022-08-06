import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'my-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent {
  // public carList: Car[];

  constructor(private carService: CarService) {}

  // public carList: Car[] = this.carService.getData(10);

  displayedColumns: string[] = [
    'name',
    'model',
    'year of release',
    'brand',
    'color',
  ];

  dataSource = new TableVirtualScrollDataSource(this.carService.getData(1000));
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
