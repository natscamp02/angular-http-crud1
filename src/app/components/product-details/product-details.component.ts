import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    public product?: Product;
    public isLoading: boolean = false;

    private subscriptions?: Subscription;

    constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const paramsSub = this.route.params.subscribe((params) => {
            this.isLoading = true;

            const productSub = this.productsService.getProductByID(params['id']).subscribe((product) => {
                this.product = product;
                this.isLoading = false;
            });

            this.subscriptions?.add(productSub);
        })

        this.subscriptions?.add(paramsSub);
    }

    ngOnDestroy(): void {
        this.subscriptions?.unsubscribe();
    }

}
