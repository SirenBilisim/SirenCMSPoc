import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Unvan } from "../../../_models/_Unvan/unvan";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Unvan2Service } from "../../../_services/_Unvan2/unvan2.service";
import { ToastrService } from "ngx-toastr";
import { Location } from '@angular/common';  // Location service is used to go back to previous component

@Component({
  selector: 'app-edit-unvan2',
  templateUrl: './edit-unvan2.component.html',
  styleUrls: ['./edit-unvan2.component.css']
})
export class EditUnvan2Component implements OnInit {

  unvan: Unvan;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,         // Location service to go back to previous component
    private apiService: Unvan2Service,
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit() {
    let itemId = window.localStorage.getItem("editItemId");
    if (!itemId) {
      alert("Invalid action.")
      this.router.navigate(['list-unvan']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      adi: ['', [Validators.required, Validators.minLength(2)]],
      parafUnvan: ['']
    });
    this.apiService.getUnvanById(+itemId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateUnvan(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.toastr.success(this.editForm.controls['adi'].value + ' updated successfully');   // Show succes message when data is successfully submited
          this.router.navigate(['list-unvan']);
        }
        ,error => {
        }
        );
  }

  goBack() {
    this.location.back();
  }

}
