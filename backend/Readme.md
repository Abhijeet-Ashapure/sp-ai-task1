# Features:

## Overview

- Create and Read user functionality
- Integration with MongoDB for data storage
- Basic GDPR compliance measures
- Designed with clean and maintainable code structure

## Getting Started

### Clone the Repository

git clone <URL>
cd MyProject

# Setup MongoDB
- Install MongoDB or use a cloud instance.
- Create a database named MyDatabase.

Make sure the connection string is correctly set in appsettings.json:
``
{
  "ConnectionStrings": {
    "DefaultConnection": "mongodb://127.0.0.1:27017/"
  }
}
``
- Build and Run the Application:
- Restore the project dependencies:

dotnet restore

# Run the application:

dotnet run

# The Swagger will be available at:
http://localhost:5134/swagger/index.html

## API Endpoints

# POST /api/User - Create a new user
Request body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin",
}

# GET /api/User/
- Retrieve Users data.

## GDPR Compliance
- User data collection is minimized to only necessary fields (name and email).

## Testing
- Use tools like Postman or Swagger to test the API endpoints.