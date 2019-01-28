import { Component, OnInit } from '@angular/core';
import { ROOT_URL } from "../../../_models/config";
import {turkish } from "../../../_models/Turkish";
import { Unvan2Service } from "../../../_services/_Unvan2/unvan2.service";
import { Unvan } from "../../../_models/_Unvan/unvan";

@Component({
  selector: 'app-datatable-client-side',
  templateUrl: './datatable-client-side.component.html',
  styleUrls: ['./datatable-client-side.component.css']
})
export class DatatableClientSideComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private apiService: Unvan2Service) { }
  unvans: Unvan[];
  displayTable = false;
  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
  }

  dataState() {
    this.apiService.getUnvans().subscribe(data => {
      console.log(data['liste']);
      this.unvans = data['liste'];
      this.displayTable = true;
      this.buildDtOptions();
      
    })
  }
  buildDtOptions() {
    this.dtOptions = {
      searching: true,
      processing: true,
      serverSide: false,
      responsive: true,
      order: [[1, "asc"]],
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Hepsi"]],
      language:turkish,
      // dom: "<'row'<'col-sm-12'tr>>" +
      //   "<'row'<'col-sm-4'l><'col-sm-4'i><'col-sm-4'p>>",
      data: this.unvans,
      // ajax: {
      //   type: "GET",
      //   url: "/UnvanClient/UnvanListeDataTableGet",
      //   data: null,
      //   error: function (data) {
      //     console.log(data);

      //   },
      //   dataSrc: function (response) {
      //     if (response.hasOwnProperty('success') && response.success == false) {
      //       console.log(response.result);

      //       return [];
      //     } else {
      //       return response.result;
      //     }
      //   }
      // },

      columns: [
        { title: "Id", data: "id", searchable: false, visible: false },
        { title: "Adı", data: "adi" },
        { title: "Paraf Ünvan", data: "parafUnvan" },
        // { title: "Durum", data: "status", render: UnvanStatuRenderer, sortable: false, width: 50 },
        // { title: "İşlemler", render: UnvanButonlarRenderer, sortable: false, data: null, responsivePriority: 999, width: 50 }
      ]
    };
  }



}
