import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private hobj:HttpClient) { }
  insertemployee(empobj:Employee){
    let purl="http://localhost:3000/employees";
    return this.hobj.post(purl,JSON.stringify(empobj));
  }
  editemployee(empobj:Employee,id:any){
    let purl="http://localhost:3000/employees/"+id;
    return this.hobj.put(purl,JSON.stringify(empobj));
  }
  deleteemployee(id:any){
    let purl="http://localhost:3000/employees/"+id;
    return this.hobj.delete(purl);
  }
  listemployee(){
    let purl="http://localhost:3000/employees";
    return this.hobj.get<Employee[]>(purl);
  }
  detailemployee(id:any){
    let purl="http://localhost:3000/employees/"+id;
    return this.hobj.get<Employee[]>(purl);
  }

}
