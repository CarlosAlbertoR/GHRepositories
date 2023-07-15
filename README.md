# GitHub Repositories Explorer

GitHub Repositories Explorer is a web application that allows users to explore GitHub repositories, register, and log in using email and password, Google, and GitHub authentication. Users can view top GitHub users, a list of repositories, user profiles, and like their favorite repositories. The application is built using React and Firebase.

## Features

- Register and log in using email and password
- Sign in with Google and GitHub
- View top GitHub users
- Explore and search GitHub repositories
- Like and bookmark repositories
- View user profiles with their repositories

## Demo

You can try out the live demo of GitHub Repositories Explorer [here](https://gh-repositories.web.app/). Enjoy!

## Getting Started

### Prerequisites

To run the project locally, you need the following prerequisites:

- Node.js and npm installed on your machine
- Firebase account and configuration
- GitHub API token for GitHub authentication

### Installation

Follow these steps to set up and run the project locally:

1. Clone this repository:

```bash
    git clone https://github.com/CarlosAlbertoR/GHRepositories
```

2. Navigate to the project directory:
```bash
    cd GHRepositories
```

3. Install dependencies: 
```bash
    npm install
```

4. Set up Firebase:

Create a new Firebase project on the Firebase Console.
Add a web app to your Firebase project and copy the configuration details.
Create a .env file in the project root directory and add your Firebase configuration:

```env
    REACT_APP_FIREBASE_API_KEY='your-firebase-api-key'
    REACT_APP_FIREBASE_AUTH_DOMAIN='your-firebase-auth-domain'
    REACT_APP_FIREBASE_PROJECT_ID='your-firebase-project-id'
    REACT_APP_FIREBASE_STORAGE_BUCKET='your-firebase-storage-bucket'
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID='your-firebase-messaging-sender-id'
    REACT_APP_FIREBASE_APP_ID='your-firebase-app-id'
```

5. Set up GitHub API token:

Generate a GitHub API token from your GitHub account.
Add the GitHub API token to the .env file:

```env
    REACT_APP_GH_API_KEY='your-github-api-token'
```

6. Start the application: 
```bash
    npm start
```
7. Open your browser at http://localhost:3000