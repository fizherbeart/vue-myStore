import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getFilterArray(array) {
    const res = [];
    const json = {};
    for (let i = 0; i < array.length; i++) {
        const _self = array[i];
        if (!json[_self]) {
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
}
export default new Vuex.Store({
    state: {
        userLevel: 1,  // 用户权限等级，之后登陆时更新这个数据
        productList: [{
            id: 1,
            name: 'AirPods',
            brand: 'Apple',
            image: require('@/assets/demo.jpg'),
            cost: 1288,
            color: '白色'
        },
        {
            id: 2,
            name: 'BeatsX 入耳式耳机',
            brand: 'Beats',
            image: require('@/assets/demo.jpg'),
            cost: 1188,
            color: '白色'
        },
        {
            id: 3,
            name: 'Beats Solo3 Wireless 头戴式式耳机',
            brand: 'Beats',
            image: require('@/assets/demo.jpg'),
            cost: 2288,
            color: '金色'
        },
        {
            id: 4,
            name: 'Beats Pill+ 便携式扬声器',
            brand: 'Beats',
            image: require('@/assets/demo.jpg'),
            cost: 1888,
            color: '红色'
        },
        {
            id: 5,
            name: 'Sonos PLAY:1 无线扬声器',
            brand: 'Sonos',
            image: require('@/assets/demo.jpg'),
            cost: 1578,
            color: '白色'
        },
        {
            id: 6,
            name: 'Powerbeats3 by Dr. Dre Wireless 入耳式耳机',
            brand: 'Beats',
            image: require('@/assets/demo.jpg'),
            cost: 1488,
            color: '金色'
        },
        {
            id: 7,
            name: 'Beats EP 头戴式耳机',
            brand: 'Beats',
            image: require('@/assets/demo.jpg'),
            cost: 788,
            color: '蓝色'
        },
        {
            id: 8,
            name: 'B&O PLAY BeoPlay A1 便携式蓝牙扬声器',
            brand: 'B&O',
            image: require('@/assets/demo.jpg'),
            cost: 1898,
            color: '金色'
        },
        {
            id: 9,
            name: 'Bose® QuietComfort® 35 无线耳机',
            brand: 'Bose',
            image: require('@/assets/demo.jpg'),
            cost: 2878,
            color: '蓝色'
        },
        {
            id: 10,
            name: 'B&O PLAY Beoplay H4 无线头戴式耳机',
            brand: 'B&O',
            image: require('@/assets/demo.jpg'),
            cost: 2298,
            color: '金色'
        }],
        cartList: []
    },
    getters: {
        brands: state => {
            const brands = state.productList.map(item => item.brand);
            return getFilterArray(brands);
        },
        colors: state => {
            const colors = state.productList.map(item => item.color);
            return getFilterArray(colors);
        }
    },
    mutations: {
        // 添加商品列表
        setProductList(state, data) {
            state.productList = data;
        },
        // 添加到购物车
        addCart(state, id) {
            // 先判断购物车是否已有，如果有，数量+1
            const isAdded = state.cartList.find(item => item.id === id);
            if (isAdded) {
                isAdded.count++;
            } else {
                state.cartList.push({
                    id: id,
                    count: 1
                })
            }
        },
        // 修改商品数量
        editCartCount(state, payload) {
            const product = state.cartList.find(item => item.id === payload.id);
            product.count += payload.count;
        },
        // 删除商品
        deleteCart(state, id) {
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index, 1);
        },
        // 清空购物车
        emptyCart(state) {
            state.cartList = [];
        }
    },
    actions: {
        // 请求商品列表
        getProductList(context) {
            // 真实环境通过 ajax 获取，这里用异步模拟
            setTimeout(() => {
                context.commit('setProductList', product_data);
            }, 500);
        },
        // 购买
        buy(context) {
            // 真实环境应通过 ajax 提交购买请求后再清空购物列表
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('emptyCart');
                    resolve();
                }, 500)
            });
        }
    }
})
