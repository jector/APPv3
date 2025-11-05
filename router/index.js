import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
//import AddProduct  from "@/views/AddProduct.vue"
import ProductList   from "@/views/ProductList.vue"
import ProductDetail from "@/views/ProductDetail.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //history: createWebHashHistory();
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/homepage',
            component: HomePage
        },
        //{ path: '/addproduct', component: AddProduct },
        {
            path: '/product',
            component: ProductList
        },
        {
            path: '/product/:id',
            name: 'ProductDetail',
            component : ProductDetail
            //component: () => import('../views/ProductDetail.vue'),
        },

        /*{
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/About.vue')
        }*/
    ]
})

export default router;