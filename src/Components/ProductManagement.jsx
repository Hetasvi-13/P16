import React, { useState } from 'react';

function ProductManagement() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(price),
      category: category,
      quantity: Number(quantity)
    };

    setProducts([...products, newProduct]);

    // Clear the form after adding a product
    setProductName('');
    setPrice('');
    setCategory('');
    setQuantity('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
          Product Management
        </h1>

        {/* Product Form */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-bold">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="mb-1 block font-semibold">
                Product Name
              </label>

              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                Price (₹)
              </label>

              <input
                type="number"
                min="0.01"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price"
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full rounded-lg border p-3"
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                Quantity
              </label>

              <input
                type="number"
                min="0"
                step="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Add Product
            </button>

          </form>
        </div>

        {/* Product List */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-bold">
            Product List ({products.length})
          </h2>

          {products.length === 0 ? (
            <p className="text-gray-500">
              No products added yet.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <h3 className="mb-2 text-lg font-bold text-blue-700">
                    {product.name}
                  </h3>

                  <p>
                    <strong>Price:</strong> ₹{product.price.toFixed(2)}
                  </p>

                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>

                  <p>
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                </div>
              ))}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProductManagement;