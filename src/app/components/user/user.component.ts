import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address; // object
  hobbies:string[]; // array
  hello:any; //any type

  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log("constructor run");
  }

  ngOnInit() {
    console.log("ngOnInit");

    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 Main Street',
      city: 'Boston',
      state: 'MA'
    };

    this.hobbies = ['write code','watch movies','listen to music'];
    this.hello = 1;

    this.dataService.getPosts().subscribe( posts => {
      this.posts = posts;
    })
  }

  // onclick event for button
  onClick() {
    this.name = 'Gabesz';
    this.hobbies.push('new hobby!');
  }

  // form add event
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  // form delete
  deleteHobby(index) {
    this.hobbies.splice(index, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  title:string,
  body:string,
  userId:number
}
