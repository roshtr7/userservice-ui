import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
// import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, DELETE'
  })
};

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
    this.http.get('http://localhost:8080/user/list').subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    })

  }

  onDelete(user: any): void {
    // alert("Delete clicked"+user.id);
    this.http.delete('http://localhost:8080/user' + "/" + user.id).subscribe({
      next: data => {
        Swal.fire(
          'ok',
          'User deleted successfully',
          'success'
        )
        this.ngOnInit();
      },
      error: error => {
        console.error('There was an error!', error);
        Swal.fire(
          'Error',
          'There was an error. Please try again later',
          'error'
        )
      }
    });
  }

}
