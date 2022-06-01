import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'

const apiURL = 'http://localhost:3001/api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${apiURL}/products`)
  }
  getProduct(id:any): Observable<any>{
    return this.http.get(`${apiURL}/product/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`${apiURL}/product`, data)
  }
  remove(id:any): Observable<any>{
    return this.http.delete(`${apiURL}/product/${id}`)
  }
  update(id:any , data:any): Observable<any>{
    return this.http.put(`${apiURL}/product/${id}`, data)
  }
}
