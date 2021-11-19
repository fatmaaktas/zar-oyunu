import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    onlyNumber(event:any) {
        const charCode = (event.which) ? event.which : event.keyCode;
        return (!(charCode > 31 && (charCode < 48 || charCode > 57)))
    }

}