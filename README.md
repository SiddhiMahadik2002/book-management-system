# Book Management System

A simple React-based Book Management System that allows users to manage books through CRUD operations using MockAPI.

## Features

- View all books
- Add a new book
- Edit existing book details
- Delete books
- Search books by title or author
- Responsive card-based UI
- API integration using MockAPI

## Technologies Used

- React.js
- Axios
- CSS3
- MockAPI


## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd book-management-system
```

3. Install dependencies

```bash
npm install
```

4. Start the application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## API Configuration

Update the MockAPI URL in:

```javascript
src/services/api.js
```

Example:

```javascript
const API_URL = "https://6a154fa591ff9a63de07e598.mockapi.io/book";
```

## Available Operations

### Add Book

Users can add a book by entering:

- Title
- Author
- Genre
- Publication Year

### Edit Book

Click the **Edit** button on any book card to update its details.

### Delete Book

Click the **Delete** button to remove a book from the collection.

### Search Books

Use the search bar to find books by:

- Title
- Author

