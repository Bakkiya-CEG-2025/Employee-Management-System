import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {
  id:any=0;
  empobj=new Employee("","",0)
  constructor(private act:ActivatedRoute,private serv:EmployeeService,private rtr:Router){
  this.id=this.act.snapshot.params["id"];
  this.serv.detailemployee(this.id).subscribe((dt)=>{
    console.log(dt);
    if(Array.isArray(dt)){
      this.empobj=dt[0];
    }
    else
    this.empobj=dt;

  });
  }
  deletecode(){
    let conf=confirm('Are you sure ? ')
    if(conf){
    this.serv.deleteemployee(this.id).subscribe(()=>{
    this.rtr.navigate(["list"]);
    });
    }
    }
}
