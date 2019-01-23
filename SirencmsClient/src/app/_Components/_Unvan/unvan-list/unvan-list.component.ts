import { Component, OnInit } from '@angular/core';
import { UnvanService } from "../../../_services/_Unvan/unvan.service";
import { Unvan } from "../../../_models/_Unvan/unvan";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-unvan-list',
  templateUrl: './unvan-list.component.html',
  styleUrls: ['./unvan-list.component.css']
})
export class UnvanListComponent implements OnInit {
  p: number = 1;                      // Fix for AOT compilation error for NGX pagination
  unvanList: Unvan[];                 // Save students data in Unvan's array.
  hideWhenNoUnvan: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  

  constructor(
    public unvanApi: UnvanService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ){ }

  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {     
    this.unvanApi.GetUnvansList().subscribe(data => {
      this.preLoader = false;
      this.unvanList = data['liste'];      
      console.log(this.unvanList);
      if(data.length <= 0){
        this.hideWhenNoUnvan = false;
        this.noData = true;
      } else {
        this.hideWhenNoUnvan = true;
        this.noData = false;
      }
    })
  }

  deleteUnvan(unvan) {
    if (window.confirm('Are sure you want to delete this ünvan ?')) { // Asking from user before Deleting student data.
      this.unvanApi.DeleteEmployee(unvan).subscribe(res=>{
        this.toastr.success(unvan.adi + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
        this.dataState();
      }); // Using Delete student API to delete student.
      
    }
  }

}
