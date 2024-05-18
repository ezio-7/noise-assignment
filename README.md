# Sleep Tracker API

## Overview
This is a simple RESTful API for tracking user sleep data, built with Node.js and Express.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ezio-7/noise-assignment.git
    cd sleep-tracker-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the server:
    ```sh
    npm start
    ```

## Running Tests
To run the tests, use:
```sh
npm test.
```

## API Endpoints

### POST `/sleep`
- **Description:** Submit a new sleep record.
- **URL:** http://localhost:3000/sleep
- **Request Body:** JSON object containing `userId`, `hours`, and `timestamp`.
    ```json
    {
      "userId": "user1",
      "hours": 8,
      "timestamp": "2024-05-18T07:00:00Z"
    }
    ```
- **Response:** The created sleep record.



### GET `/sleep/:userId`
- **Description:** Retrieve all sleep records for a given user, sorted by date.
- **URL:** http://localhost:3000/sleep/user1 (replace user1 with the actual userId you want to retrieve data for)
- **Response:** Array of sleep records.

### DELETE `/sleep/:recordId`
- **Description:** Delete a specific sleep record by its ID.
- **URL:** http://localhost:3000/sleep/1 (replace 1 with the actual recordId you want to delete)
- **Response:** 204 No Content.



## Step-by-Step Guide for Postman:
Start Your Server:
Ensure your server is running by executing: npm start

### POST /sleep:
URL: http://localhost:3000/sleep
Method: POST
Headers: Content-Type: application/json
Body:
{
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T07:00:00Z"
}
# Response: You will receive a response with an id field, which is the unique identifier for the created record. For example:
{
  "id": "1621490443021",
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T07:00:00Z"
}

### GET /sleep/:userId:
URL: http://localhost:3000/sleep/user1
Method: GET
Response: You will see a list of sleep records for the user. For example:
[
  {
    "id": "1621490443021",
    "userId": "user1",
    "hours": 8,
    "timestamp": "2024-05-18T07:00:00Z"
  }
]

### DELETE /sleep/:recordId:
URL: http://localhost:3000/sleep/1621490443021 (replace 1621490443021 with the actual id from the POST response or GET response)
Method: DELETE
Response: You should receive a 204 No Content response if the deletion was successful.

