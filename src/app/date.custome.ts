import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function customeDateMatchValidator(fromDate :Date,toDate:Date): ValidatorFn {
    
    return (control:AbstractControl) : ValidationErrors | null => {
        let value = control.value;
        if (!value) {
            return null;
        } else {
            value = new Date(value);
        }
  
      
        if(value >=fromDate && value <= toDate){
          
            
            return null
        }else{            
           
            return {dateMatch:true}
        }
    }

}