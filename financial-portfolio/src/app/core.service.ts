import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Investment } from './investment/investment.module';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private investments$ = new BehaviorSubject<Investment[]>([]);
  private apiUrl = 'http://localhost:3000/investments';

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.http.get<Investment[]>(this.apiUrl).subscribe(data => {
      this.investments$.next(data);
    });
  }

  getInvestments(): Observable<Investment[]> {
    return this.investments$.asObservable();
  }

  addInvestment(inv: Investment) {
    this.http.post<Investment>(this.apiUrl, inv).subscribe(newInvestment => {
      const current = this.investments$.value;
      this.investments$.next([...current, newInvestment]);
    });
  }
}
