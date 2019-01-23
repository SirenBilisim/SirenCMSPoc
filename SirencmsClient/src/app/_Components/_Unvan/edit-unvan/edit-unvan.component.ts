import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { UnvanService } from "../../../_services/_Unvan/unvan.service";
import { ToastrService } from "ngx-toastr";
import { Location } from '@angular/common';  // Location service is used to go back to previous component



@Component({
  selector: 'app-edit-unvan',
  templateUrl: './edit-unvan.component.html',
  styleUrls: ['./edit-unvan.component.css']
})
export class EditUnvanComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to student's edit form
  constructor(
    private crudApi: UnvanService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message

  ) { }

  ngOnInit() {
    this.updateUnvanData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetUnvan(id).subscribe(data => {
     
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }

  get id() {
    return this.editForm.get('id');
  }
  // Accessing form control using getters
  get adi() {
    return this.editForm.get('adi');
  }

  get parafUnvan() {
    return this.editForm.get('parafUnvan');
  }

  // Contains Reactive Form logic
  updateUnvanData() {
    this.editForm = this.fb.group({
      id: [''],
      adi: ['', [Validators.required, Validators.minLength(2)]],
      parafUnvan: ['']
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  updateForm(){
    this.crudApi.UpdateUnvan(this.editForm.value).subscribe(res=>  
      {  
        this.toastr.success(this.editForm.controls['adi'].value + ' updated successfully');   // Show succes message when data is successfully submited
        this.router.navigate(['view-unvans']);               // Navigate to student's list page when student data is updated
      });
  }
}
