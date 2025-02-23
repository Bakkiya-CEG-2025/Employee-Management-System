import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Employee } from '../employee';
@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent {
  empobj=new Employee("","",0);
    constructor(private serv:EmployeeService,private rtr:Router){}
    savedata(){
    this.serv.insertemployee(this.empobj).subscribe(()=>{
    this.rtr.navigate(["list"]);
    });
    }
    
}
