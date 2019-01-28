import { Directive } from '@angular/core';
import { AsyncValidatorFn, AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs";
import { Unvan2Service } from '../../_services/_Unvan2/unvan2.service';


export function existingAdiValidator(unvanService: Unvan2Service, id:any): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
     
     
        return unvanService.getUnvanByAdi(id, control.value).then(
            result => {
                debugger;
                return (!result) ? { "adiExists": true } : null;
            }
        );
    };
}18

@Directive({
    selector: '[adiExists][formControlName],[adiExists][formControl],[adiExists][ngModel]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ExistingAdiValidatorDirective, multi: true }],
    
})
export class ExistingAdiValidatorDirective implements AsyncValidator {
    constructor(private unvanService: Unvan2Service, private id : number) { }

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return existingAdiValidator(this.unvanService, this.id)(control);
    }
} 