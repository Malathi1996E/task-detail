import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8081/student';
  private baseUrl1 = 'http://localhost:8080/file';
  registerUser(user: any): Observable<any> {
    const addUrl = `${this.baseUrl}/AddEmployee`;
    return this.http.post(addUrl, user);
  }

  registerUser1(user: any): Observable<any> {
    const addUrl = `${this.baseUrl1}/upload`;
    return this.http.post(addUrl, user);
  }
 
  getUsers1(): Observable<any[]> {
    const getUrl = `${this.baseUrl1}/getAllEmployee`;
    return this.http.get<any[]>(getUrl);
  }

  getUsers(): Observable<any[]> {
    const getUrl = `${this.baseUrl}/getAll`;
    return this.http.get<any[]>(getUrl);
  }

  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.baseUrl}/DeleteEmployeeById/${userId}`;
    return this.http.delete(deleteUrl);
  }

  editUser(userId: number): Observable<any> {
    const editUrl = `${this.baseUrl}/getEmployeeById/${userId}`;
    return this.http.get(editUrl);
  }

  updateUser(id: any, data: any): Observable<any> {
    const updateUrl = `${this.baseUrl}/updateEmployeeById/${id}`;
    return this.http.put(updateUrl, data);
  }
 
}
