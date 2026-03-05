```
📚 Bookstore Management API

A RESTful API for managing a bookstore built using Node.js, Express.js, MongoDB, and Mongoose.
This API supports CRUD operations, search & filtering, pagination, and centralized error handling.

It is designed using MVC Architecture, making the project clean, scalable, and easy to maintain.

🚀 Features

✅ Full CRUD Operations for Books
✅ Search books by name, author, and price range
✅ Pagination for listing books
✅ Centralized error handling using custom HttpError class
✅ Input validation with clear error messages
✅ Organized MVC Architecture
✅ Auto server restart using Nodemon

🛠️ Tech Stack
Technology	Purpose
Node.js	Runtime environment
Express.js	Backend framework
MongoDB	Database
Mongoose	ODM for MongoDB
Nodemon	Development auto restart

bookstore-management/
│
├── app.js
├── package.json
├── .env.example
│
├── db/
│   └── db.js
│
├── middleware/
│   └── HttpError.js
│
├── models/
│   └── bookModel.js
│
├── routes/
│   └── bookRoutes.js
│
└── controllers/
    └── bookController.js
```
```
app.js → Main entry point of the application

db/db.js → MongoDB database connection

middleware/HttpError.js → Custom error handler

models/bookModel.js → Mongoose schema for books

routes/bookRoutes.js → API routes

controllers/bookController.js → Business logic

⚙️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/vaishali2801/bookstore-management.git
cd bookstore-management
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env file and add:

PORT=5001
MONGO_URI=process.env.URI

4️⃣ Run the Server
Development Mode
npm run dev
Production Mode
npm start

Server will run at:

http://localhost:5001
📸 API Testing 
```
Create Book API

<img width="1280" height="832" alt="create" src="https://github.com/user-attachments/assets/659f35d5-27d6-4626-ada9-59fbc10cc895" />
add Book

<img width="1280" height="832" alt="addbook" src="https://github.com/user-attachments/assets/dc3ce601-d314-4535-9a06-ccd68cd2b8ec" />

Get All Books

<img width="1280" height="832" alt="get all book" src="https://github.com/user-attachments/assets/0747db1b-0207-4524-be9e-42751fc14357" />
get Book by id

<img width="1280" height="832" alt="get book by id" src="https://github.com/user-attachments/assets/8403fbc4-ec4a-42c4-a156-aeb76533227b" />

Update Book

<img width="1280" height="832" alt="update book " src="https://github.com/user-attachments/assets/d170a666-ab01-4d8a-95af-c1c9c655e069" />

Delete Book

<img width="1280" height="832" alt="delete book" src="https://github.com/user-attachments/assets/b901cd68-9718-4751-89a0-8db521322358" />
```
📡 API Endpoints

Base URL

http://localhost:5001
📖 Books API
1️⃣ Get All Books
GET /book
Response
{
  "message": "Books retrieved successfully",
  "total": 25,
  "page": 1,
  "totalPages": 3,
  "books": []
}
2️⃣ Get Book By ID
GET /books/:id
Response
{
  "message": "Book retrieved successfully",
  "book": {
    "_id": "64f1a2...",
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "publishDate": "1988",
    "price": 12.99
  }
}
3️⃣ Create Book
POST /books
Request Body
{
  "name": "The Alchemist",
  "author": "Paulo Coelho",
  "publishDate": "1988",
  "price": 12.99
}
Response
{
  "message": "Book created successfully",
  "book": {}
}
4️⃣ Update Book
PUT /books/:id
Request Body
{
  "price": 15.99
}
Response
{
  "message": "Book updated successfully",
  "book": {}
}
5️⃣ Delete Book
DELETE /books/:id
Response
{
  "message": "Book deleted successfully",
  "book": {}
}

❌ Error Handling

All errors return a consistent format:

{
  "message": "Error description"
}
Status Code	Meaning
400	Bad Request
404	Resource Not Found
500	Internal Server Error
📝 Book Schema
{
  name: String,
  author: String,
  publishDate: String,
  price: Number
}

With timestamps:

timestamps: true

Which automatically creates:

createdAt
updatedAt

🤝 Contributing

Fork the repository

Create a new branch

git checkout -b feature/new-feature

Commit changes

git commit -m "Add new feature"

Push to GitHub

git push origin feature/new-feature

Open Pull Request

📄 License

This project is licensed under the MIT License.
```
