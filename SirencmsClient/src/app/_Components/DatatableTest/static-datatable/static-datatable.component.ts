import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-datatable',
  templateUrl: './static-datatable.component.html',
  styleUrls: ['./static-datatable.component.css']
})
export class StaticDatatableComponent implements OnInit {
  title = 'Example for Angular 7 DataTable';
  dtOptions: DataTables.Settings = {};
  dtUsers = [
    { "id": 101, "firstName": "İSTANBUL", "lastName": "Singh" },
    { "id": 102, "firstName": "Reena", "lastName": "Singh" },
    { "id": 103, "firstName": "Aradhay", "lastName": "Simgh" },
    { "id": 104, "firstName": "Dilip", "lastName": "Singh" },
    { "id": 105, "firstName": "Alok", "lastName": "Singh" },
    { "id": 106, "firstName": "Sunil", "lastName": "Singh" },
    { "id": 107, "firstName": "Sushil", "lastName": "Singh" },
    { "id": 108, "firstName": "Sheo", "lastName": "Shan" },
    { "id": 109, "firstName": "Niranjan", "lastName": "R" },
    { "id": 110, "firstName": "Lopa", "lastName": "Mudra" },
    { "id": 111, "firstName": "Paramanand", "lastName": "Tripathi" }
  ];
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      data: this.dtUsers,
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      columns: [{ title: 'User ID', data: 'id' },
      { title: 'First Name', data: 'firstName' },
      { title: 'Last Name', data: 'lastName' }]
    };
  }

}
