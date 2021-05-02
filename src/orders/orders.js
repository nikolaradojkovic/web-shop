let products = [];
export let snackbar = {
    show:false,
    variant:'success',
    message:'Item added'
}

export function changeShow() {
    snackbar.show=!snackbar.show;
    return snackbar;
}

export function getProducts() {
    return products;
}

export function addProduct(product){
    products.push(product);
    return products;
}
