import React, { useState, useRef, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber, type InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dropdown, type DropdownChangeEvent } from 'primereact/dropdown';
import { Toolbar } from 'primereact/toolbar';
import { Rating, type RatingChangeEvent } from 'primereact/rating';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { DataTableProductService } from './DataTableProductService.ts'; 
import type { Product } from './DataTableProductsData.ts';

interface CategoryOption {
    label: string;
    value: string;
}

interface StatusOption {
    label: string;
    value: string;
}

const DataTableDemo: React.FC = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    
    // Products CRUD state (using service)
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<Partial<Product>>({});
    const [productDialog, setProductDialog] = useState<boolean>(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [categories, setCategories] = useState<CategoryOption[]>([]);
    const [statuses, setStatuses] = useState<StatusOption[]>([]);
    
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<Product[]>>(null);
    const productService = new DataTableProductService();

    useEffect(() => {
        loadProducts();
        loadCategories();
        loadStatuses();
    }, []);

    const loadProducts = async (): Promise<void> => {
        setLoading(true);
        try {
            const data = await productService.getProducts();
            setProducts(data);
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to load products', life: 3000 });
        } finally {
            setLoading(false);
        }
    };

    const loadCategories = (): void => {
        const categoryOptions = productService.getCategories();
        setCategories(categoryOptions);
    };

    const loadStatuses = (): void => {
        const statusOptions = productService.getStatuses();
        setStatuses(statusOptions);
    };

    const openNew = (): void => {
        setProduct({});
        setProductDialog(true);
    };

    const hideDialog = (): void => {
        setProductDialog(false);
    };

    const hideDeleteProductDialog = (): void => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = (): void => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = async (): Promise<void> => {
        try {
            if (product.id) {
                await productService.updateProduct(product as Product);
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                await productService.createProduct(product);
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }
            setProductDialog(false);
            setProduct({});
            loadProducts(); // Reload products to get updated data
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to save product', life: 3000 });
        }
    };

    const editProduct = (product: Product): void => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product: Product): void => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = async (): Promise<void> => {
        try {
            if (product.id) {
                await productService.deleteProduct(product.id);
                setDeleteProductDialog(false);
                setProduct({});
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
                loadProducts(); // Reload products to get updated data
            }
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to delete product', life: 3000 });
        }
    };

    const confirmDeleteSelected = (): void => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = async (): Promise<void> => {
        try {
            const ids = selectedProducts.map(p => p.id).filter((id): id is number => id !== undefined);
            await productService.deleteProducts(ids);
            setDeleteProductsDialog(false);
            setSelectedProducts([]);
            toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            loadProducts(); // Reload products to get updated data
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to delete products', life: 3000 });
        }
    };

    const exportCSV = (): void => {
        dt.current?.exportCSV();
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof Product): void => {
        const val = e.target.value;
        setProduct(prev => ({ ...prev, [name]: val }));
    };

    const onInputNumberChange = (e: InputNumberValueChangeEvent, name: keyof Product): void => {
        const val = e.value || 0;
        setProduct(prev => ({ ...prev, [name]: val }));
    };

    const onRatingChange = (e: RatingChangeEvent): void => {
        const val = e.value || 0;
        setProduct(prev => ({ ...prev, rating: val }));
    };

    const onDropdownChange = (e: DropdownChangeEvent, name: keyof Product): void => {
        const val = e.value;
        setProduct(prev => ({ ...prev, [name]: val }));
    };

    const leftToolbarTemplate = (): React.ReactElement => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || selectedProducts.length === 0} />
            </div>
        );
    };

    const rightToolbarTemplate = (): React.ReactElement => {
        return <Button label="Export" icon="pi pi-upload" severity="help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData: Product): React.ReactElement => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} width="64px" className="shadow-4" />;
    };

    const priceBodyTemplate = (rowData: Product): string => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const ratingBodyTemplate = (rowData: Product): React.ReactElement => {
        return <Rating value={rowData.rating} readOnly stars={5} cancel={false} />;
    };

    const statusBodyTemplate = (rowData: Product): React.ReactElement => {
        const getSeverity = (status: string): 'success' | 'warning' | 'danger' | null => {
            switch (status) {
                case 'INSTOCK':
                    return 'success';
                case 'LOWSTOCK':
                    return 'warning';
                case 'OUTOFSTOCK':
                    return 'danger';
                default:
                    return null;
            }
        };

        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const actionBodyTemplate = (rowData: Product): React.ReactElement => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="!mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="m-0">Manage Products</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="Search..." />
            </IconField>
        </div>
    );

    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );

    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    const onSelectionChange = (e: { value: Product[] }): void => {
        setSelectedProducts(e.value);
        toast.current?.show({ severity: 'info', summary: 'Selection Changed', detail: `${e.value.length} product(s) selected`, life: 3000 });
    };

    return (
        <div className="card">
            {/* Products CRUD Demo */} 
            {/* Specifying selectionMode as multiple on a Column, displays a checkbox inside that column for selection. By default,               row clicks also trigger selection, set selectionMode of DataTable to checkbox to only trigger selection using the     
             checkboxes. */}
            <Toast ref={toast} />
            <h2 className="text-center mb-4">DataTable Demo (Products CRUD)</h2>
            <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
            <DataTable 
                ref={dt} 
                value={products} 
                selection={selectedProducts} 
                onSelectionChange={onSelectionChange}
                dataKey="id"  
                paginator 
                rows={10} 
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" 
                globalFilter={globalFilter} 
                header={header}
                tableStyle={{ minWidth: '50rem' }}
                loading={loading}
                selectionMode="multiple"
            >
                <Column selectionMode="multiple" exportable={false}></Column>
                <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={product.name || ''} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={!product.name ? 'p-invalid' : ''} />
                    {!product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="image">Image</label>
                    <InputText id="image" value={product.image || ''} onChange={(e) => onInputChange(e, 'image')} required className={!product.image ? 'p-invalid' : ''} />
                    {!product.image && <small className="p-error">Image is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="category">Category</label>
                    <Dropdown id="category" value={product.category} onChange={(e) => onDropdownChange(e, 'category')} options={categories} optionLabel="label" placeholder="Select a Category" />
                </div>
                <div className="field">
                    <label htmlFor="rating">Reviews</label>
                    <Rating id="rating" value={product.rating} onChange={onRatingChange} stars={5} cancel={false} />
                </div>
                <div className="field">
                    <label htmlFor="quantity">Quantity</label>
                    <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                </div>
                <div className="field">
                    <label htmlFor="status">Status</label>
                    <Dropdown id="status" value={product.status} onChange={(e) => onDropdownChange(e, 'status')} options={statuses} optionLabel="label" placeholder="Select a Status" />
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {selectedProducts && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
};

export default DataTableDemo; 