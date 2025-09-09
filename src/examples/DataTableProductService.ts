import { productsData, type Product } from './DataTableProductsData.ts';

export class DataTableProductService {
    private products: Product[];

    constructor() {
        this.products = [...productsData];
    }

    getProducts(): Promise<Product[]> {
        return Promise.resolve([...this.products]);
    }

    createProduct(product: Partial<Product>): Promise<Product> {
        const newProduct: Product = {
            ...product,
            id: Math.max(...this.products.map(p => p.id)) + 1,
            code: this.generateProductCode(),
            name: product.name || '',
            category: product.category || '',
            quantity: product.quantity || 0,
            price: product.price || 0,
            rating: product.rating || 0,
            status: product.status || '',
            image: product.image || ''
        };
        this.products.push(newProduct);
        return Promise.resolve(newProduct);
    }

    updateProduct(product: Product): Promise<Product> {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = { ...product };
            return Promise.resolve(this.products[index]);
        }
        return Promise.reject(new Error('Product not found'));
    }

    deleteProduct(id: number): Promise<Product> {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            return Promise.resolve(deletedProduct);
        }
        return Promise.reject(new Error('Product not found'));
    }

    deleteProducts(ids: number[]): Promise<Product[]> {
        const deletedProducts: Product[] = [];
        ids.forEach(id => {
            const index = this.products.findIndex(p => p.id === id);
            if (index !== -1) {
                deletedProducts.push(this.products.splice(index, 1)[0]);
            }
        });
        return Promise.resolve(deletedProducts);
    }

    generateProductCode(): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    getCategories(): { label: string; value: string }[] {
        const categories = [...new Set(this.products.map(product => product.category))];
        return categories.map(category => ({ label: category, value: category }));
    }

    getStatuses(): { label: string; value: string }[] {
        return [
            { label: 'INSTOCK', value: 'INSTOCK' },
            { label: 'LOWSTOCK', value: 'LOWSTOCK' },
            { label: 'OUTOFSTOCK', value: 'OUTOFSTOCK' }
        ];
    }
} 