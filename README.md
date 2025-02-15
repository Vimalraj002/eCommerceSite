# 🛒 E-Commerce Cart System  

A simple shopping cart system built using **JavaScript, HTML, and CSS**, featuring local storage for cart persistence, dynamic order summaries, and customizable delivery options.  

## 🚀 Features  

- **Add to Cart**: Users can add products to their cart.  
- **Update & Remove Items**: Change item quantity or remove items from the cart.  
- **Delivery Options**: Choose different shipping options, with calculated delivery dates.  
- **Local Storage**: Cart data persists even after page refresh.  
- **Modular Code Structure**: Organized using separate JavaScript modules (`cart.js`, `products.js`, `deliveryOptions.js`).  

## 🛠️ Technologies Used  

- **JavaScript (ES6+)**  
- **HTML & CSS**  
- **Day.js** (for date calculations)  
- **Local Storage** (for data persistence)  

## 📂 Project Structure  

```
📦 e-commerce-cart  
├── 📂 data  
│   ├── cart.js             # Manages cart data  
│   ├── products.js         # Stores product details  
│   ├── deliveryOptions.js  # Delivery options and prices  
├── 📂 checkout  
│   ├── orderSummary.js     # Generates order summary  
│   ├── paymentSummary.js   # Handles price calculations  
├── index.html              # Main shopping cart page  
├── styles.css              # Styling for the page  
├── script.js               # Main JavaScript file  
└── README.md               # Project documentation  
```

## 📌 How to Run the Project  
1. **Open `index.html` in a browser**  

## 🎯 Future Improvements  

- ✅ User authentication (login/logout)  
- ✅ Backend integration with a database  
- ✅ Checkout and payment processing  
