import { Component, OnInit } from '@angular/core';
import { Unvan2Service } from "../../../_services/_Unvan2/unvan2.service";
import { Unvan } from "../../../_models/_Unvan/unvan";
import {turkish } from "../../../_models/Turkish";
@Component({
  selector: 'app-datatable-server-side',
  templateUrl: './datatable-server-side.component.html',
  styleUrls: ['./datatable-server-side.component.css']
})
export class DatatableServerSideComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  unvans: Unvan[];
  constructor(
    private apiService: Unvan2Service
  ) { }

  ngOnInit(): void {
    const that = this;


    this.dtOptions = {
     searching: true,
      processing: true,
      serverSide: true,
      responsive: true,
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Hepsi"]],
      language:turkish,

      ajax: (dataTablesParameters: any, callback) => {
        dataTablesParameters.iDisplayLength = this.dtOptions.pageLength;
        this.apiService.getUnvanServerSide(dataTablesParameters).subscribe(resp => {
          console.log(resp);
          that.unvans = resp.liste;
          callback({
            recordsTotal: resp.totalCount,
            recordsFiltered: resp.filterCount,
            data: []
          });
        });
      }
      
    };
  }

}
