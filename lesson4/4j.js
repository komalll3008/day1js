<!DOCTYPE html>
<html>

<head>
    <title>Product</title>

    <style>
        .product {
            width: 250px;
            padding: 15px;
            border: 1px solid lightgray;
        }

        .product-name {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .price {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .add-button {
            background-color: yellow;
            border: 2px solid black;
            padding: 8px 12px;
            margin-right: 5px;
        }

        .buy-button {
            background-color: orange;
            border: 2px solid black;
            padding: 8px 12px;
        }
    </style>
</head>

<body>

    <div class="product">

        <p class="product-name">
            Adults Plain Cotton T-shirt
        </p>

        <p class="price">
            Price: $7.99
        </p>

        <button
            class="add-button"
            onclick="alert('Added')">
            Add to cart
        </button>

        <button
            class="buy-button"
            onclick="console.log('Loading...'); alert('Purchased')">
            Buy now
        </button>

    </div>

</body>

</html>