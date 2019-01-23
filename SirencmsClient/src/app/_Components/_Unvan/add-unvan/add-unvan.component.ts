import { Component, OnInit } from '@angular/core';
import { UnvanService } from "../../../_services/_Unvan/unvan.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Reactive form servicesunvan.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-add-unvan',
  templateUrl: './add-unvan.component.html',
  styleUrls: ['./add-unvan.component.css']
})
export class AddUnvanComponent implements OnInit {
  public addForm: FormGroup;  // Define FormGroup to student's form

  constructor(
    public crudApi: UnvanService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message

  ) { }

  ngOnInit() {
    this.crudApi.GetUnvansList();  // Call GetStudentsList() before main form is being called
    this.unvanForm();
  }

  // Reactive student form
  unvanForm() {
    this.addForm = this.fb.group({
      id: [''],
      adi: ['', [Validators.required, Validators.minLength(2)]],
      parafUnvan: ['']
    })
  }

  get id() {
    return this.addForm.get('id');
  }
  // Accessing form control using getters
  get adi() {
    return this.addForm.get('adi');
  }

  get parafUnvan() {
    return this.addForm.get('parafUnvan');
  }
  ResetForm() {
    this.addForm.reset();
  }  
 
  submitUnvanData() {
    this.crudApi.AddUnvan(this.addForm.value).subscribe(res=>  
      {  
        this.toastr.success(this.addForm.controls['adi'].value + ' successfully successfully');   // Show succes message when data is successfully submited
        this.ResetForm(); 
      });
    
   };

}
