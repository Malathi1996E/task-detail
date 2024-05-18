import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudserviceService } from '../Services/crudservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selectimage',
  templateUrl: './selectimage.component.html',
  styleUrls: ['./selectimage.component.css']
})
export class SelectimageComponent implements OnInit {

  Bankform!: FormGroup;
  users: any[] = [];
  editId:any;
  selectedFile: any;
  constructor(
    private formBuilder: FormBuilder,
    private crudserviceService: CrudserviceService,
    private cdr: ChangeDetectorRef,
    private http:HttpClient
  ) {}
  ngOnInit() {
    this.Bankform = this.formBuilder.group({
      name: ['', Validators.required],
      branch: ['', Validators.required],
      category: ['', Validators.required],
      imageFileName: ['', Validators.required]
    });
    this.fetchUsers();
  }

  addUser() {
    if (this.Bankform.invalid) {
      return;
    }
    const formData = {
      name: this.Bankform.value.name,
      branch: this.Bankform.value.branch,
      category: this.Bankform.value.category,
      imageFileName: this.Bankform.value.imageFileName
    };
    this.crudserviceService.registerUser(formData).subscribe(() => {
      this.fetchUsers();
      this.Bankform.reset();
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
      this.Bankform.patchValue({
        name: res.name,
        branch: res.branch,
        category: res.category,
        imageFileName: res.imageFileName       
      });
  });
}

update() {
  const user = {
    name: this.Bankform.value.name,
    branch: this.Bankform.value.branch,
    category: this.Bankform.value.category,
    imageFileName:this.Bankform.value.imageFileName
  };
  this.crudserviceService.updateUser(this.editId, user).subscribe(updatedUser => {
  });
  this.Bankform.reset();
}
 onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      this.http.post<any>('http://localhost:8080/upload', formData).subscribe(
        () => {
          console.log('File uploaded successfully');
        },
        (        error: any) => {
          console.error('Failed to upload file:', error);
        }
      );
    }
  }



}
