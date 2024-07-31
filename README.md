CRUD API
Overview
This CRUD API provides endpoints for managing products in a MongoDB database using Node.js, Express, and Mongoose. The API supports basic operations such as creating, reading, updating, and deleting products.

API Endpoints
1. Create Product
Endpoint: POST /products
Description: Creates a new product.
Request Body:
json

{
  "name": "string",
  "quantity": "number",
  "price": "number",
  "image": "string (optional)"
}
Success Response:
Code: 200 OK
Content:
json

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
Error Response:
Code: 400 Bad Request
Content:
json

{
  "success": false,
  "message": "Validation Error: Name, quantity, and price are required."
}
Code: 500 Internal Server Error
Content:
json

{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while creating product: <error_message>"
  }
}
2. Get All Products
Endpoint: GET /products
Description: Retrieves a list of all products.
Success Response:
Code: 200 OK
Content:
json

{
  "success": true,
  "data": [
    {
      "name": "string",
      "quantity": "number",
      "price": "number",
      "image": "string (optional)"
    }
  ],
  "message": "All Products Fetched Successfully"
}
Error Response:
Code: 500 Internal Server Error
Content:
json

{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while fetching products: <error_message>"
  }
}
3. Get Product by ID
Endpoint: GET /products/:id
Description: Retrieves a single product by its ID.
Success Response:
Code: 200 OK
Content:
json

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
Error Response:
Code: 400 Bad Request
Content:
json

{
  "success": false,
  "message": "Invalid ID format"
}
Code: 404 Not Found
Content:
json

{
  "success": false,
  "message": "Product with ID <id> does not exist"
}
Code: 500 Internal Server Error
Content:
json

{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while fetching product: <error_message>"
  }
}
4. Update Product
Endpoint: PUT /products/:id
Description: Updates a product by its ID.
Request Body:
json

{
  "name": "string (optional)",
  "quantity": "number (optional)",
  "price": "number (optional)",
  "image": "string (optional)"
}
Success Response:
Code: 200 OK
Content:
json

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
Error Response:
Code: 400 Bad Request
Content:
json

{
  "success": false,
  "message": "Invalid ID format"
}
Code: 404 Not Found
Content:
json

{
  "success": false,
  "message": "Product with ID <id> does not exist"
}
Code: 500 Internal Server Error
Content:
json

{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while updating product: <error_message>"
  }
}
5. Delete Product
Endpoint: DELETE /products/:id
Description: Deletes a product by its ID.
Success Response:
Code: 200 OK
Content:
json

{
  "success": true,
  "data": null,
  "message": "Product with ID <id> deleted successfully"
}
Error Response:
Code: 400 Bad Request
Content:
json

{
  "success": false,
  "message": "Invalid ID format"
}
Code: 404 Not Found
Content:
json

{
  "success": false,
  "message": "Product with ID <id> does not exist"
}
Code: 500 Internal Server Error
Content:
json

{
  "success": false,
  "error": {
    "code": "INTERNAL_SERVER_ERROR",
    "message": "An unexpected error occurred while deleting product: <error_message>"
  }
}
Error Codes
400 Bad Request: The request is invalid or missing required parameters.
404 Not Found: The requested resource (product) was not found.
500 Internal Server Error: An unexpected error occurred on the server.
Logging
The API uses morgan for logging requests. Logs are saved to MongoDB with the following structure:

method: HTTP method of the request.
url: URL of the request.
status: HTTP status code of the response.
responseTime: Time taken to process the request in milliseconds.
Development
Dependencies:

express - Web framework for Node.js.
mongoose - MongoDB object modeling tool.
morgan - HTTP request logger middleware.
Run the Application:

Ensure MongoDB is running.
Install dependencies: npm install
Start the server: npm start
Contributing
Contributions are welcome! Please follow the standard GitHub workflow: fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License.

Feel free to adjust the details based on your actual API implementation and project specifics.