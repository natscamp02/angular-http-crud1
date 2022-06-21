import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

    public products: Product[] = [];

    private subscriptions?: Subscription;

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        const sub = this.productsService.getAllProducts().subscribe((prods) => this.products = prods);

        this.subscriptions?.add(sub)
    }

    ngOnDestroy(): void {
        this.subscriptions?.unsubscribe();
    }
}
