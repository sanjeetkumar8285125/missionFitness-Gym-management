//  import axios from '../../node_modules/axios/index.js';
// import axios from 'axios'
 let addToCart=document.querySelectorAll('.butttoncart')
let cartCounter=document.querySelector('#cartCounter')
let quantity=document.querySelector('#Quantity')
function updateCart(data)
{
axios.post('/update-cart',data).then(res=>{
    console.log(res);
    cartCounter.innerText=res.data.totalQty
    
})
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let data=JSON.parse(btn.dataset.powder);
        console.log(data)
        updateCart(data);
    })
 })

