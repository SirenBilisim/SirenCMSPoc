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
        { title: "İşlemler", render: this.UnvanButonlarRenderer}
      ]
    };
  }

  UnvanButonlarRenderer (data, type, row) {

    var html = "<div class=\"dropdown\">" +
        "<button class=\"btn btn-default dropdown-toggle btn-xs\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" > İşlemler\r\n " +
            "<span class=\"caret\"></span>\r\n</button>\r\n" +
        "   <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n";

    var guncelleBtn = "<li><a href=\"javascript:;\"  onclick=\"UnvanGuncelle(" + "'" + row["id"] + "'" + ")\"><i class=\"fa-lg mr-10 zmdi zmdi-edit\"></i> Güncelle </a></li>";
    var silBtn = "<li><a href=\"javascript:;\" onclick=\"UnvanSil(" + "'" + row["id"] + "'" + ")\"><i class=\"fa-lg mr-10 zmdi zmdi-eye-off\"></i> Pasifleştir </a></li>";
    var aktiflestirBtn = "<li><a href=\"javascript:;\" onclick=\"UnvanAktiflestir(" + "'" + row["id"] + "'" + ")\"><i class=\"fa-lg mr-10 zmdi zmdi-input-power\"></i> Aktifleştir </a></li>";

    html += guncelleBtn + silBtn + aktiflestirBtn;

    return html;
}



}
