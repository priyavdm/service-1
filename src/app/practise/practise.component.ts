import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit{

  userslist:any;
  constructor(public s:ServiceService){}
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   this.userslist=this.s.getuserslist().subscribe((data)=>{this.userslist=data});
  // }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.userslist=this.s.getmylist().subscribe((data)=>{this.userslist=data});
    // console.log(this.s.getmylist().subscribe(data=>this.userslist=data));
    this.getall();
  }
  getall(){
  this.userslist=this.s.getAll().subscribe((data)=>{this.userslist=data})
  }
  deleteUser(id:number){
    console.log(id);
    
    this.userslist=this.s.deleteUser(id).subscribe((data)=>{
      this.getall()
      console.log(data);
      
    })
  }


}
