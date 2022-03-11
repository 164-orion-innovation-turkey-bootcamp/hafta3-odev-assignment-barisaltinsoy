import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(
    private http: HttpClient
  ) { }

  // user name must not need to be the same with other "user" names
  postData(user){
    this.http.post('http://localhost:3000/users',{user}).subscribe(response => {console.log(response)} );
  }
  getData(){
    return this.http.get('http://localhost:3000/users/').pipe(
      map((responseData) => {
        let newArray = [];
        for (let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            newArray.push(responseData[key]);
          }
        }
        return newArray;
      })
    );

    // this.http.get('http://localhost:3000/users').subscribe(responseData => {
    //   console.log(responseData)})
    // // .pipe(map((responseData) => {
    // //   console.log(responseData);
    // // }))
  }
}


