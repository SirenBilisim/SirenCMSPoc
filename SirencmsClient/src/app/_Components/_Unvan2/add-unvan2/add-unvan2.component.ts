import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Reactive form servicesunvan.service";
import { Router } from "@angular/router";
import { Unvan2Service } from "../../../_services/_Unvan2/unvan2.service";
import { existingAdiValidator } from '../../../_core/custom-validators/existing-adi-validator';


@Component({
  selector: 'app-add-unvan2',
  templateUrl: './add-unvan2.component.html',
  styleUrls: ['./add-unvan2.component.css']
})
export class AddUnvan2Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder, private router: Router, private apiService: Unvan2Service
  ) { }

  addForm: FormGroup;
  submitted = false;
  ngOnInit() {

    

    this.addForm = this.formBuilder.group({
      id: [],
      adi: ['',
        [Validators.required, Validators.minLength(5)],
        [existingAdiValidator(this.apiService,0)] //async validators
      ],
      parafUnvan: ['']
    });
  }
  get f() {
    return this.addForm.controls;
  }
  get adi() {
    return this.addForm.get('adi');
 }  
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.apiService.createUnvan(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-unvan']);
      });
  }


}
