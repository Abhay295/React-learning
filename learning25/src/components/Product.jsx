import React from "react";

const Product = () => {
  let arr = [
    {
      id: 1,
      product_name: "Men's Denim Jacket",
      price: 90.0,
      discount_percentage: 40,
      category: "Fashion",
    },
    {
      id: 2,
      product_name: "Wireless Headphones",
      price: 150.0,
      discount_percentage: 30,
      category: "Electronics",
    },
    {
      id: 3,
      product_name: "Smartphone",
      price: 700.0,
      discount_percentage: 20,
      category: "Mobile Phones",
    },
    {
      id: 4,
      product_name: "Running Shoes",
      price: 80.0,
      discount_percentage: 50,
      category: "Fashion",
    },
    {
      id: 5,
      product_name: "Gaming Laptop",
      price: 1200.0,
      discount_percentage: 15,
      category: "Computers",
    },
    {
      id: 6,
      product_name: "Leather Handbag",
      price: 200.0,
      discount_percentage: 60,
      category: "Fashion",
    },
    {
      id: 7,
      product_name: "Bluetooth Speaker",
      price: 100.0,
      discount_percentage: 25,
      category: "Electronics",
    },
    {
      id: 8,
      product_name: "Office Chair",
      price: 180.0,
      discount_percentage: 35,
      category: "Furniture",
    },
    {
      id: 9,
      product_name: "LED Monitor",
      price: 250.0,
      discount_percentage: 20,
      category: "Computers",
    },
    {
      id: 10,
      product_name: "Smartwatch",
      price: 180.0,
      discount_percentage: 30,
      category: "Wearables",
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product table</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Discount%</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((a) => {
            return (
              <tr>
                <td>{a.id}</td>
                <td
                  style={{
                    color: a.discount_percentage >= 40 ? "green" : "white",
                  }}
                >
                  {a.product_name}
                </td>
                <td>{a.price}</td>
                <td>{a.discount_percentage}</td>
                <td
                  style={{
                    backgroundColor: a.category == "Fashion" ? "red" : "",
                  }}
                >
                  {a.category}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
