import VueRouter from 'vue-router'
import Order from './pages/Order'
import OrderEdit from './pages/OrderEdit'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Order
        },
        {
            path: '/order_edit',
            component: OrderEdit
        }
    ],
    mode: 'history'
})