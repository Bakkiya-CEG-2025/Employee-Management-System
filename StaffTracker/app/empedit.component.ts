import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent {
    id:any=0;
    empobj=new Employee(""
    ,
    ""
    ,0)
    constructor(private act:ActivatedRoute,private serv:EmployeeService,private rtr:Router){
    this.id=this.act.snapshot.params["id"];
    13
    this.serv.detailemployee(this.id).subscribe((dt)=>{ 
    console.log(dt);
    if(Array.isArray(dt)){
      this.empobj=dt[0];
    }
    else
    this.empobj=dt;
      
    });
    }
    modifydata(){
      this.serv.editemployee(this.empobj,this.id).subscribe(()=>
      {
  
      this.rtr.navigate(["list"]);
      });
      }
      
}
