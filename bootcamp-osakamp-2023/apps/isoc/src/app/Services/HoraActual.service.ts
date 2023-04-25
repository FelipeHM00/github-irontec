import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";




@Injectable ({providedIn: 'root' 
  })
  export class HoraActualService {
    horaActual;
  
    constructor(private datePipe: DatePipe) {
      const now = Date.now();
      this.horaActual = this.datePipe.transform(now, 'hh:mm:ss a');
    }
  }