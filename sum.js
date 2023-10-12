const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const totalPrice = items
  .map(item => item.price) // Extract the prices into a new array
  .reduce((total, price) => total + price, 0); // Calculate the sum

console.log(totalPrice); // Output the total price
