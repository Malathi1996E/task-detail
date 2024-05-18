import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudserviceService } from '../Services/crudservice.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  registrationForm!: FormGroup;
  selectedFile: File | undefined;
  users: any[] =[];
  editId:any;
  constructor(
    private formBuilder: FormBuilder,
    private crudserviceService: CrudserviceService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      gmail: ['', Validators.required],
      mobile: ['', Validators.required]
    }); 
    this.fetchUsers();
  }
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
    }
  }

  addUser() {
    if (this.registrationForm.invalid || !this.selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append('name', this.registrationForm.value.name);
    formData.append('gmail', this.registrationForm.value.gmail);
    formData.append('mobile', this.registrationForm.value.mobile);
    formData.append('file', this.selectedFile);
    this.crudserviceService.registerUser1(formData).subscribe(() => {
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
    this.crudserviceService.getUsers1().subscribe(data => {
      this.users = data;
    });
  }

updateUser(user: any) {
  this.editId = user.id;
  this.crudserviceService.editUser(user.id).subscribe((res) => {
      this.registrationForm.patchValue({
          name: res.name,
          gmail: res.gmail,
          mobile: res.mobile       
      });
  });
}

update() {
  const user = {
    name: this.registrationForm.value.name,
    gmail: this.registrationForm.value.gmail,
    mobile: this.registrationForm.value.mobile
  };
  this.crudserviceService.updateUser(this.editId, user).subscribe(updatedUser => {
  });
  this.registrationForm.reset();
}

}
