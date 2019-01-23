import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Unvan } from "../../../_models/_Unvan/unvan";
import { Unvan2Service } from "../../../_services/_Unvan2/unvan2.service";

@Component({
  selector: 'app-list-unvan2',
  templateUrl: './list-unvan2.component.html',
  styleUrls: ['./list-unvan2.component.css']
})
export class ListUnvan2Component implements OnInit {

  unvans: Unvan[];
  constructor(
    private router: Router, private apiService: Unvan2Service
  ) { }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    this.apiService.getUnvans()
      .subscribe( data => {
          this.unvans = data['liste'];
      });
  }

  deleteUnvan(unvan: Unvan): void {
    this.apiService.deleteUnvan(unvan.id)
      .subscribe( data => {
        this.unvans = this.unvans.filter(u => u !== unvan);
      })
  };

  editUnvan(unvan: Unvan): void {
    window.localStorage.removeItem("editUnvanId");
    window.localStorage.setItem("editUnvanId", unvan.id.toString());
    this.router.navigate(['edit2-unvan']);
  };

  addUnvan(): void {
    this.router.navigate(['add-unvan']);
  };

}
