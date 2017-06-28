import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()

export class EmployeeService{
private _url:string="our.json"
constructor(private http:Http){}
getEmployee(){
return this.http.get(this._url).map((response:Response)=>response.json());

}
}
