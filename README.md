# 🔗 Lab6.2 API Simulator

## 📖 Overview

This project simulates a small **product catalog and sales API** using **TypeScript**. It demonstrates **asynchronous programming**, **Promise chaining**, and **error handling** with custom error classes.

The application:

* Fetches a list of products from a simulated catalog.
* Fetches product reviews for each product.
* Fetches a sales report.
* Logs all results and handles network errors gracefully.

---

## 🛠️ Features

* **Custom Error Classes:** `NetworkError` and `DataError` for simulating API failures.
* **Simulated API Calls:**

  * `fetchProductCatalog()` – 80% success rate
  * `fetchProductReview(productId)` – 80% success rate
  * `fetchSalesReport()` – 75% success rate
* **Promise Chaining** – sequential and parallel API calls.
* **Graceful Error Handling** – logs errors without stopping other calls.

---

## 💻 Prerequisites

* Node.js v18+
* TypeScript v5+
* npm (Node package manager)

---

## 🚀 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/structbase/API-Simulator
cd API-Simulator
```

2. Install dependencies (optional for `ts-node`):

```bash
npm install
```

3. Compile TypeScript (optional, only if running compiled JS):

```bash
npx tsc
```

---

## ⚡ Running the Project

### Option – Run compiled JavaScript

```bash
node dist/index.js
```


---

## 🧩 Project Structure

```
Lab6.2/
├── dist/                # Compiled JavaScript
│   ├── index.js
│   └── apiSimulator.js
├── index.ts             # Main orchestrator
├── apiSimulator.ts      # Simulated API functions and errors
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## 📚 Usage

When you run the app, it logs the following to the console:

* Products retrieved from the catalog
* Reviews for each product
* Sales report
* Any network errors encountered
* Final message: `"All API calls attempted"`

Example output:

```
Products: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
Reviews: [
  [
    { productId: 1, rating: 5, review: 'Excellent product!' },
    { productId: 1, rating: 4, review: 'Very good value.' }
  ],
  [
    { productId: 2, rating: 5, review: 'Excellent product!' },
    { productId: 2, rating: 4, review: 'Very good value.' }
  ]
]
Sales Report: { totalSales: 5000, unitsSold: 5000, averagePrice: 99.99 }
All API calls attempted
```

---

## ⚠️ Notes

* The API is **simulated with random success/failure**, so some calls may fail.
* Errors are caught and logged to avoid stopping the whole workflow.
* This project is for **learning purposes**, demonstrating **TypeScript async patterns** and **Promise handling**.

---
Here’s a polished **Critical Thinking Questions** section you can add to your README in the usual style:

---

## ❓ Critical Thinking Questions

**1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?**
Handling errors individually ensures that a failure in one API call does not stop the execution of other independent calls. For example, if fetching a product review fails, we can still fetch the catalog and sales report. This improves the robustness of the application and provides partial results instead of failing completely.

**2. How does using custom error classes improve debugging and error identification?**
Custom error classes like `NetworkError` and `DataError` allow developers to differentiate between types of failures. This makes debugging faster and more precise, as you can respond differently to network issues versus data validation issues. It also makes error logging clearer and easier to interpret.

**3. When might a retry mechanism be more effective than an immediate failure response?**
A retry mechanism is useful when failures are **intermittent or temporary**, such as network timeouts or server overload. Retrying a failed request can often succeed on subsequent attempts, improving reliability and user experience without requiring manual intervention.

---
