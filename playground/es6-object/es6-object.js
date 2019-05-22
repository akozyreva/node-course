// Object property shorthand

const name = 'Anna'
const userAge = 27

const user = {
  name,
  userAge,
  location: 'Frankfurt'
}

console.log(user)

// Object destructuring - recieving separate variables from obj

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// less code than const label = product.label
// he we rename lable as productLabel
// we can also assign default values, if proprety has no value in obj
const { label: productLabel, stock, rating = 2} = product
console.log(productLabel)
console.log(stock)
console.log(rating)


// we can destructre directly in description of js function
const transaction = (type, {label, stock}) => {
  console.log(label, stock)
}

transaction('order', product)
