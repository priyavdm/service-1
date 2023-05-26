import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   url='https://jsonplaceholder.typicode.com/albums';
   jsurl='http://localhost:3000';

  constructor(private h:HttpClient) { }
  getuserslist(){
    return this.h.get(this.url);
  }
  getAll(){
    return this.h.get(this.jsurl+ '/getall')
  }
  deleteUser(id:number){
    return this.h.put(this.jsurl+ '/delete', {id:id})
  }
}
