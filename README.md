# SafeHaven

SafeHaven is a web application designed to assist refugees in finding suitable camps and accessing necessary resources. Whether it's food, education, employment, healthcare, or housing, SafeHaven aims to provide a platform where refugees can easily locate and connect with relevant support services.

## Features

- **User Registration**: Refugees can register themselves on the platform to access its features.
- **Camp Locator**: Users can search for camps based on their current location.
- **Language Support**: SafeHaven offers language support to cater to the diverse linguistic needs of refugees.
- **Nationality-based Grouping**: Refugees will be grouped together based on their nationality, fostering a sense of community and support.
- **Camp Filtering**: Users can filter camps based on their specific requirements such as food, education, employment, healthcare, or housing.
- **Community Feed**: SafeHaven provides a community feed where refugees can post and interact with each other.
- **Topic Filtering**: Users can filter community feed topics to find relevant posts easily.

## Object Model

```mermaid
classDiagram
     class Refugee{
        +int id
        +String name
        +String email
        +String language
        +String country
     }
     class Admin{
        +int id
        +String username
        +String password
     }
     class Camp{
        +int id
        +String name
        +String location
        +String description
     }
     class CommunityFeed{
        +int id
        +String content
        +DateTime timestamp
     }
     class AssistanceRequest{
        +int id
        +String name
        +String email
        +String details
        +DateTime timestamp
        +Boolean resolved
     }

    Refugee "1" -- "0..*" AssistanceRequest : has
    Refugee "1" -- "0..*" CommunityFeed : contributes
    Refugee "1" -- "0..*" Camp : resides

     Admin --|> Refugee : manages
     Admin --|> CommunityFeed : manages
     Admin --|> Camp : manages

```
## REST API Endpoints

### Refugee Endpoints:
- `GET /refugees`: Retrieve all refugees (accessible to Admin).
- `POST /refugees`: Create a new refugee.
- `GET /refugees/{id}`: Retrieve a specific refugee.
- `PUT /refugees/{id}`: Update a specific refugee.
- `DELETE /refugees/{id}`: Delete a specific refugee (accessible to Admin).

### CommunityFeed Endpoints:
- `GET /community-feed`: Retrieve all community feed posts (accessible to logged-in users).
- `POST /community-feed`: Create a new community feed post (accessible to logged-in users).
- `GET /community-feed/{id}`: Retrieve a specific community feed post (accessible to logged-in users).
- `PUT /community-feed/{id}`: Update a specific community feed post (accessible to Admin).
- `DELETE /community-feed/{id}`: Delete a specific community feed post (accessible to Admin).

### Camp Endpoints:
- `GET /camps`: Retrieve all camps.
- `POST /camps`: Create a new camp (accessible to Admin).
- `GET /camps/{id}`: Retrieve a specific camp.
- `PUT /camps/{id}`: Update a specific camp (accessible to Admin).
- `DELETE /camps/{id}`: Delete a specific camp (accessible to Admin).

### AssistanceRequest Endpoints:
- `POST /assistance-requests`: Create a new assistance request.
- `GET /assistance-requests`: Retrieve all assistance requests (accessible to Admin).
- `GET /assistance-requests/{id}`: Retrieve a specific assistance request (accessible to Admin).
- `PUT /assistance-requests/{id}`: Update a specific assistance request (accessible to Admin).
- `DELETE /assistance-requests/{id}`: Delete a specific assistance request (accessible to Admin).

### Authentication Endpoints:
- `POST /login`: Authenticate and receive an access token.

## Installation

1. Clone the repository: `git clone https://github.com/info-6150-spring-2024/final-project-team-refugee`
2. Navigate to the project directory: `cd SafeHaven`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

## Contributors

Meet the Team : Sohan Patil , Damini Thorat , Smit Patel , Daksh Patel

## License

SafeHaven is licensed under the MIT License. See the LICENSE file for more information.

## Contact

If you have any questions or suggestions regarding SafeHaven, feel free to contact us at teamatsafehaven@gmail.com. We appreciate your feedback!