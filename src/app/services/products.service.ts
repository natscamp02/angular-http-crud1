import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private APIUrl = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.APIUrl}/products`);
    }

    getProductByID(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.APIUrl}/products/${id}`);
    }
}
