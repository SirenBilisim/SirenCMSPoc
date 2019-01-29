import { Component, OnInit ,ViewChild} from '@angular/core';

import swal,{ SweetAlertOptions } from 'sweetalert2';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent implements OnInit {

  ngOnInit() {
    
  }

  name = 'Angular 4';
  item:any={};
  public alertOption:SweetAlertOptions = {};
  @ViewChild('saveSwal') private saveSwal: SwalComponent;
  @ViewChild('dialogsuccess') private dialogsuccess: SwalComponent;
  constructor(){
    this.alertOption = {
      title:"Are you sure?",
      text:"Do you want to save changes",
      cancelButtonColor:"#d33",
      showCancelButton:true,
      cancelButtonText:"No! Review",
      confirmButtonColor:"#3085d6",
      confirmButtonText:'Yes, Save progress',
      showLoaderOnConfirm:true,
      focusCancel:true,
      preConfirm: () => {
    return new Promise((resolve, reject) => {
      resolve()
      setTimeout(() => {
        console.log("Doing async operation");
        resolve()
      }, 5000)
    })
  },
  allowOutsideClick: () => !swal.isLoading()
    }
  }
onDelete(data:any){
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Work Complete");
    resolve();
    this.dialogsuccess.show()
  }, 1000);
});
}
  showAlert(evt:any){
    this.saveSwal.show().then(() => {
      swal({
      type: 'success',
      title: 'Ajax request finished!'
    })
   })
  }
  save(){
    console.log("data saved");
  }
}

