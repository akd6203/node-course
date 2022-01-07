// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age:userAge,
    location:'Sunam'
}

console.log(user)

// Object destructing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice:undefined
}

const {label:productLable, stock, rating=5} = product
console.log(productLable)
console.log(stock)
console.log(rating)

const transaction = (type, {label, price, author='Test'}) => {
    console.log(label, price, author)
}   

transaction('order', product)