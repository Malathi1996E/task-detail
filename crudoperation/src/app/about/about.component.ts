import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface User {
id: number;
  userName: string;
  displayPicture: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class aboutComponent implements OnInit {

  fileForm: FormGroup; 
  userList: User[] = [];
  selectedFile: any;
  editId: any;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.fileForm = this.formBuilder.group({
      userName: [''],
      file: [null]
    });
  }

  ngOnInit(): void {
    this.getUserList();
    console.log(this.getUserList)
  }

  private getUserList() {
    this.httpClient.get<User[]>("http://localhost:8080/user/getAllUser").subscribe(
      (response: User[]) => {
        this.userList = response;
      },
      (error: any) => {
        console.log("error occurred while fetching user list");
      }
    );
  }

  onFileSelected(event: any) {
    this.fileForm.get('file')?.setValue(event.target.files[0]);
    this.fileForm.get('files')?.setValue(event.target.files[0]);
  }

  save(): void {
    const formData = new FormData();
    formData.append("name", this.fileForm.value.userName);
    formData.append("file", this.fileForm.value.file);
    formData.append('files', this.fileForm.value.files);

    this.httpClient.post("http://localhost:8080/user/addUser", formData).subscribe(
      (response: any) => {
        console.log(response);
        this.getUserList();
      },
      (error: any) => {
        console.log(error);
      }
    );
    console.log("saved");
    console.log(formData);
    this.fileForm.reset();
  }

  deleteUser(userId: number): void {
    this.httpClient.delete(`http://localhost:8080/user/deleteUser/${userId}`).subscribe(
      (response: any) => {
        console.log(response);
        this.getUserList();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  editUser(userId: number): void {
    this.httpClient.get<User>(`http://localhost:8080/user/getUserId/${userId}`).subscribe(
      (user: User) => {
        console.log(user);
       
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateUserName(userId: number, newName: string): void {
    const updateData = { name: newName };
    this.httpClient.put(`http://localhost:8080/user/updateUser/${userId}`, updateData).subscribe(
      (response: any) => {
        console.log(response);
        this.getUserList();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 
}
