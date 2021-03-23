import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userData: any;

  constructor(private http: HttpClient) {
    this.userData = [];
   }

  ngOnInit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( data => {
      this.http.get('http://localhost:8080/user/list').subscribe( data => {
      this.userData =  data;
      console.log(this.userData);
    })
    
  }

}
