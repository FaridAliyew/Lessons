import React from 'react';
import './App.css';

enum Category {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Food = "Food",
  Furniture = "Furniture"
}

class Product {
  name: string;
  price: number;
  category: Category;

  constructor(name: string, price: number, category: Category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getProductDetails() {
    return `Product Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
  }
}

const product1 = new Product("Iphone", 1000, Category.Electronics);
const product2 = new Product("T-shirt", 35.20, Category.Clothing);
const product3 = new Product("Pizza", 15.21, Category.Food);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Details</h1>
        <ul>
          <li>{product1.getProductDetails()}</li>
          <li>{product2.getProductDetails()}</li>
          <li>{product3.getProductDetails()}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
