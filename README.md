
# CRUD API
## Overview

This CRUD API provides endpoints for managing products in a MongoDB database using Node.js, Express, and Mongoose. The API supports basic operations such as creating, reading, updating, and deleting products.


## API Endpoints


### 1. Create Product

- **Endpoint:** `POST api/v1/products/create`
- **Description:** Creates a new product.
- **Request Body:**
  ```json
  {
    "name": "string",
    "quantity": "number",
    "price": "number",
    "image": "string (optional)"
  }

- **Success Response:**
- **Code:** `201 Created`
- **Content:** 

  ```json
  {
    "success": true,
    "data": {
      "name": "string",
      "quantity": "number",
      "price": "number",
      "image": "string (optional)"
    },
    "message": "Product Created Successfully"
  }


- **Error Response:**
- **Code:** `400 Bad Getaway`
- **Content:** 

  ```json
  {
  "success": false,
  "message": "Validation Error: Name, quantity, and price are required."
  }

- **Code:** `500 Internal Server Error`
- **Content:** 

  ```json
  {
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while creating product: <error_message>"
    }
  }



### 2. Get All Product

- **Endpoint:** `GET api/v1/products/all`
- **Description:** Retrieves a list of all products.

- **Success Response:**
- **Code:** `200 ok`
- **Content:** 

  ```json
  {
    "success": true,
    "data": {
      "name": "string",
      "quantity": "number",
      "price": "number",
      "image": "string"
    },
    "message":  "All Products Fetched Successfully"
  }


- **Error Response:**
- **Code:** `500 Internal Server Error`
- **Content:** 

  ```json
  {
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while fetching product: <error_message>"
    }
  }



### 3. Get Product by ID

- **Endpoint:** `GET api/v1/products/product/:id`
- **Description:** Retrieves a single product by its ID.
- **Success Response:**
- **Code:** `201 Created`
- **Content:** 

  ```json
  {
    "success": true,
    "data": {
      "name": "string",
      "quantity": "number",
      "price": "number",
      "image": "string (optional)"
    },
     "message": "Product with ID <id> fetched successfully"
  }


- **Error Response:**
- **Code:** `400 Bad Request`
- **Content:** 

  ```json
  {
   "success": false,
   "message": "Invalid ID format"
  }

- **Code:** `404 Not Found`
- **Content:** 

  ```json
  {
   "success": false,
   "message": "Product with ID <id> does not exist"
  }

- **Code:** `500 Internal Server Error`
- **Content:** 

  ```json
  {
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while fetching product: <error_message>"
    }
  }



### 4. Update Product by ID

- **Endpoint:** `PUT api/v1/products/product/update/:id`
- **Description:**  Updates a product by its ID.
- **Request Body:**
  ```json
  {
   "name": "string (optional)",
   "quantity": "number (optional)",
   "price": "number (optional)",
   "image": "string (optional)"
  }


- **Success Response:**
- **Code:** `200 Ok`
- **Content:** 

  ```json
  {
    "success": true,
    "data": {
      "name": "string",
      "quantity": "number",
      "price": "number",
      "image": "string (optional)"
    },
      "message": "Product with ID <id> updated successfully"
  }


- **Error Response:**
- **Code:** `400 Bad Request`
- **Content:** 

  ```json
  {
   "success": false,
   "message": "Invalid ID format"
  }

- **Code:** `404 Not Found`
- **Content:** 

  ```json
  {
   "success": false,
   "message": "Product with ID <id> does not exist"
  }

- **Code:** `500 Internal Server Error`
- **Content:** 

  ```json
  {
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while updating product: <error_message>"
    }
  }



### 5. Delete Product by ID

- **Endpoint:** `DELETE api/v1/products/product/delete/:id`
- **Description:**  Deletes a product by its ID.

- **Success Response:**
- **Code:** `200 Ok`
- **Content:** 

  ```json
  {
    "success": true,
    "data": {
      "name": "string",
      "quantity": "number",
      "price": "number",
      "image": "string (optional)"
    },
      "message": "Product with ID <id> deleted successfully"
  }


- **Error Response:**
- **Code:** `400 Bad Request`
- **Content:** 

  ```json
  {
   "success": false,
   "message": "Invalid ID format"
  }

- **Code:** `404 Not Found`
- **Content:** 

  ```json
  {
   "success": false,
   "message": "Product with ID <id> does not exist"
  }

- **Code:** `500 Internal Server Error`
- **Content:** 

  ```json
  {
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while deleting product: <error_message>"
    }
  }




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

`PORT`


## Run Locally

Clone the project

```bash
  git clone https://github.com/rishabhmaindola/CRUD
```

Go to the project directory

```bash
  cd CRUD
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Contributing

Contributions are always welcome!

Please follow the standard GitHub workflow: fork the repository, make your changes, and submit a pull request.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)  License.


## Author

- [@rishabhmaindola](https://www.github.com/rishabhmaindola)

