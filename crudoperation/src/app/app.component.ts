import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudserviceService } from './Services/crudservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angcrud';
  registrationForm!: FormGroup;
  users: any[] = [];
  editId:any;
  constructor(
    private formBuilder: FormBuilder,
    private crudserviceService: CrudserviceService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      jdate: ['', Validators.required],
      clas: ['', Validators.required]
    });
   this.fetchUsers();
   }
   addUser() {
    if (this.registrationForm.invalid) {
      return;
    }
    const formData = {
      name: this.registrationForm.value.name,
      dob: this.registrationForm.value.dob,
      jdate: this.registrationForm.value.jdate,
      clas:this.registrationForm.value.clas
      };
    this.crudserviceService.registerUser(formData).subscribe(() => {
      this.fetchUsers();
      this.registrationForm.reset();
    });
  }

  deleteUser(user: any) {
    const userId = user.id;
    this.crudserviceService.deleteUser(userId).subscribe(() => {
      this.fetchUsers();
    }); 
}
  private fetchUsers() {
    this.crudserviceService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

updateUser(user: any) {
  this.editId = user.id;
  this.crudserviceService.editUser(user.id).subscribe((res) => {
      this.registrationForm.patchValue({
          name: res.name,
          dob: res.dob,
          jdate: res.jdate,
          clas:res.clas
      });
  });
}

update() {
  const user = {
    name: this.registrationForm.value.name,
    dob: this.registrationForm.value.dob,
    jdate: this.registrationForm.value.jdate,
    clas:this.registrationForm.value.clas
  };
  this.crudserviceService.updateUser(this.editId, user).subscribe(updatedUser => {
    this.fetchUsers();
    this.registrationForm.reset();
  });
  
  
 }
}
