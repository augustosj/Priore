import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpProvider {

  private url: string = 'http://localhost:3000/';

  constructor(private http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getMessages(){
    this.http.get(this.url)
    .do((res: Response) => console.log(res))
    .map((res: Response) => res.json())
    .catch(this.catchError)
  }

  private catchError(error: Response | any){
    console.log (error);
    return Observable.throw (error.json().error || "Server error.")
  }

  private logResponse(res: Response) {
    console.log(res);

  }

  private extractData (res: Response) {
    return resizeBy.json();
  }
}
