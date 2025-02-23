import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  ar:Employee[]=[];
  constructor(private serv:EmployeeService){
  this.serv.listemployee().subscribe((dt)=>{
  this.ar=dt;
  });
  }
  
}
