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
npm test
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

