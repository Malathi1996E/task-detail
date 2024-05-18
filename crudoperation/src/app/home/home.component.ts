import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudserviceService } from '../Services/crudservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // users: any[] = [];
  // userForm!: FormGroup;
  // constructor(
  //   private formBuilder: FormBuilder, 
  //   private userService:CrudserviceService) { }
  // ngOnInit(): void {
  //   this.userForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  //   this.fetchUsers();
  // }

  // fetchUsers() {
  //   this.userService.getUsers().subscribe(users => {
  //     this.users = users;
  //   });
  // }
  // get formControls() {
  //   return this.userForm.controls;
  // }
  // addUser() {
    
  //   const newUser = {
  //     name: this.formControls['name'].value,
  //     email: this.formControls['email'].value
  //   };
  //   this.userService.addUser(newUser).subscribe(() => {
  //     this.fetchUsers();
  //     this.userForm.reset();
  //   });
  // }
  // deleteUser(userId: number) {
  //   this.userService.deleteUser(userId).subscribe(() => {
  //     this.fetchUsers();
  //   });
  // }
}
