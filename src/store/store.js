import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { vm } from '@/main'


Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        overlay: {
            state:true,
            message:''
        },
        products:[],
        filteredProducts:[],
        groups:[],
        group:{},
        subGroups:[],
        productsOnSale:[],
        productsBestSale:[],
        snackbar:{
            show:false,
            variant:'rgba(76, 175, 80,0.8)',
            message:'Item added'
        },
        usr_credentials: {
            cus_firsName: "",
            cus_lastName: "",
            cus_address: "",
            cus_zipCode: "",
            cus_city: "",
            cus_phone: ""
        },
        cart:[]
    },
    mutations:{
        addItemToCart(state, payload){
            const prod = payload.product;
            const qty = payload.qty;
            const idx = state.cart.findIndex((product) =>{
                return product._id === prod._id
            })
            if(idx === -1){
                state.cart.push(
                    {
                        _id: prod._id,
                        prod_name:prod.prod_name,
                        prod_img:prod.prod_img,
                        prod_price:prod.prod_price,
                        prod_discount:prod.prod_discount,
                        qty:qty
                    });
                state.snackbar = {show:true, variant:'rgba(76, 175, 80,0.8)', message:'Added to cart: ' + prod.prod_name};
            }else{
                let upd = false;
                if(state.cart[idx].qty > 1) {
                    state.cart[idx].qty += qty;
                    upd = true;
                }else{
                    if(qty>0) {
                        state.cart[idx].qty += qty;
                        upd = true;
                    }
                }
                if(upd){
                    state.snackbar = {show:true, variant:'rgba(76, 175, 80,0.8)', message:'Updated: ' + prod.prod_name + ' qty: ' + state.cart[idx].qty}
                }else {
                    state.snackbar = {show:true, variant:'rgba(255, 82, 82,0.8)', message:'Minimum quantity is 1'}
                }
            }
        },
        removeFromCart(state, payload){
            const idx = state.cart.findIndex((product) =>{
                return product._id === payload._id
            })
            if(idx !== -1) {
                state.cart.splice(idx,1);
                state.snackbar = {show:true, variant:'rgba(255, 82, 82,0.8)', message:'Removed from cart: ' + payload.prod_name}
            }
            if(state.cart.length === 0) {
                vm.$router.push({name: 'Home'});
                state.snackbar = {show:true, variant:'rgba(255, 82, 82,0.8)', message:'Your cart is empty'}
            }
        },
        setGroups:(state, data) => state.groups = data,
        setGroup:(state, data) => {
            state.subGroups=[];
            if(data.idx !== -1){
                state.filteredProducts = [];
                let group = state.groups[data.idx];
                state.group = group;
                state.subGroups = group.grp_subGroup;
                state.filteredProducts = state.products.filter(product => product.prod_group === group.grp_name)
            }else {
                state.filteredProducts = state.products;
            }

        },
        setSubGroup:(state, data) => {
            if(data.idx !== -1) {
                state.filteredProducts = [];
                let subGroup = state.subGroups[data.idx];
                state.filteredProducts = state.products.filter(product => product.prod_sub_group === subGroup.sub_name && product.prod_group === state.group.grp_name)
            }else{
                state.filteredProducts = state.products.filter(product => product.prod_group === state.group.grp_name)
            }

        },
        setProducts:(state, data) => {
            state.products = data;
            state.filteredProducts=data;
        },
        setProductsOnSale:(state, data) => state.productsOnSale = data,
        setProductsBestSale:(state, data) => state.productsBestSale = data,
        setOverlay:(state, data) => state.overlay = data,
        setSnackBar(state, data){
            state.snackbar = {show:true, variant:(data.variant === 1) ? 'rgba(76, 175, 80,0.8)': 'rgba(255, 82, 82,0.8)', message:data.message}
        },
        initialOnSale:(state) => {      //to initialise products on sale when we click SALE on navBar
                state.filteredProducts = state.productsOnSale;
        },
        sortProducts:(state, data) =>{
            let products = state.filteredProducts;
            switch (data) {
                case 'Name asc': state.filteredProducts = products.sort((x, y) => {
                    let a = x.prod_name.toUpperCase(), b = y.prod_name.toUpperCase();
                    return a === b ? 0 : a > b ? 1 : -1; });
                break;
                case 'Name desc': state.filteredProducts = products.sort((x, y) => {
                    let a = x.prod_name.toUpperCase(), b = y.prod_name.toUpperCase();
                    return a === b ? 0 : a < b ? 1 : -1; });
                break;
                case 'Price asc': state.filteredProducts = products.sort((x, y) => { return x.prod_price*x.prod_discount - y.prod_price*y.prod_discount }); break;
                case 'Price desc': state.filteredProducts = products.sort((x, y) => { return y.prod_price*y.prod_discount - x.prod_price*x.prod_discount }); break;
            }
        }
    },
    actions:{
        async getAllProducts({commit}){
            commit('setOverlay', {state:true, message:'Getting data...'});      //overlay until data is ready
            await axios.get('https://web-shop-api-210321.herokuapp.com/products').then(res =>{

                commit('setProducts', res.data);
                // return bestsellers products decs
                commit('setOverlay', {state:false, message:''});
                const bestSellProd = res.data.filter(product => product.prod_sold !== 0).sort((prod1, prod2) => {
                    return prod2.prod_sold  - prod1.prod_sold;
                });
                commit('setProductsBestSale', bestSellProd);
                // return on sale products from higher discount
                const onSaleProd = res.data.filter(product => product.prod_discount !== 1).sort((prod1, prod2) => {
                    return prod1.prod_discount - prod2.prod_discount;
                });
                commit('setProductsOnSale', onSaleProd);
            }).catch(err => {
                console.log(err)
            }).finally(() =>{
            })
        },
        async getAllGroups({commit}){
            commit('setOverlay', {state:true, message:'Getting data...'});      //overlay until data is ready
            await axios.get('https://web-shop-api-210321.herokuapp.com/groups').then(res =>{
                commit('setGroups', res.data);
            }).catch(err => {
                console.log(err)
            }).finally(() =>{
            })
        }
    },
})

