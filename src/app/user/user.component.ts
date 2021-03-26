import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  userDto = {
    firstName: '',
    lastName: '',
    dob: '',
    doj: '',
    pinCode: '',
    email: ''
  }

  ngOnInit(): void {
  }

  onSubmit(theForm: NgForm) {
    // alert("form submitted"); 
    this.userDto.firstName = theForm.value.firstname;
    this.userDto.lastName = theForm.value.lastname;
    this.userDto.email = theForm.value.email;
    this.userDto.dob = theForm.value.dateofbirth;
    this.userDto.doj = theForm.value.dateofjoining;
    this.userDto.pinCode = theForm.value.pincode;

    console.log(this.userDto);
    // this.http.post('http://localhost:8080/user', JSON.stringify(this.data)).subscribe(...);
    this.http.post('http://localhost:8080/user', this.userDto).subscribe(res => {

      console.log('');
      Swal.fire(
        'Success!',
        'User created successfully!',
        'success'
      )

    }, error => {
      alert(JSON.stringify(error));
      Swal.fire(
        'Error!',
        'There was an error. Please try again later',
        'error'
      )
    });
  }


}
