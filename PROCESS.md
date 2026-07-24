# AskAI - Project Setup Guide

This document explains how to set up and run the AskAI project locally.



---
- mongodb is required in "auth"
- intializing node in "auth" and installing required packages
- adding MONGODB_URI to .env and creating db file
- same cluster is being used for different purpose so we just add the name of collection in end or URI
- basic server setup in index.js of auth
- config folder and db.js setup
- making of connectDb function within db.js and connecting mongoose with the help of MONGODB_URI
- now gateway should be linked with "auth" of services 
- install a package named express-http-proxy in gateways folder
- setting up local host url of auth route in .env of gateway
- in index.js of gateway setting up a middleware which sets up the "auth" route with the help of proxy()
- now setting up user_schema model by creating a separate models folder within auth and creating a user_model.js
- creating schema within user_model.js with the help of mongoose and exportinf it while keeping all the necessary requirements of schema
- Authentication will be done with the help of firebase
- and when request comes from frontend we will verify the user in backend if it exist, about its token and all for that we will be creating firebase.js within config only
- for that we have to install firebase-admin within auth folder
- now we have to setup firebase project with the help of firebase website
- create a project in firebase
- within project create an "web" app and go inside it with the help of settings icon
- it will open a project settings page, then go to service accounts and within firebase admin sdk there will be an option to generate new private key, generate it if dont have existing one and save it in services/auth folder and within services/auth/firebase write the code provided in "Node.js" lang in "Firebase Admin SDK"
- now just create a basic frontend page
- add tailwind to it as per the process of adding it
- we have to add firebase to frontend also
- by going inside web app settings within general copy the firebase code for frontend and create a utils folder within frontend and add a firebase.js within utils and paste all the code and export const getAuth and googleProvider they both are exported from auth not app
- create a separate .env file in frontend and add firebase_api_key which is present in frontend/utils/firebase.js and within firebaseconfig there exist api_key keep that in .env file in name of "VITE_FIREBASE_API_KEY" and in utils instead of original api key we have to use "import.meta.env.VITE_FIREBASE_API_KEY"
- after that go to firebase security-->Authentication and enable google provider by adding new provider and enabling it
- create a googleLogin with signInWithPopup function within const App function of App.jsx
- that function will create some data through which we identify if the user id is already there or not
- it will check with unique id whether user has login before or not

- we always fetch gateway url, i mean in env file of frontend we keep server url as "local host 8000" i.e gateway url only, and whenever we want to do api call we will use "/auth" so it will take us to auth service and then whenever we want to do login we will use "/login" after "/auth" so it will fetch login route present in auth
- gateway is always main server url 
- now we will always use axios to fetch server api in frontend
- We will be always using gateway url so will create a separate axios file within utils
- created a "api" using create axios such that instead of using axios to fetch we will use "api" and will route through that

---
# Setting Up REDIS File
- will create a docker-compose.yml file and will pull redis through it
- to run it in background "docker compose up -d"
- redis works at port 6379
- it will be used by many folder so will be using at shared
- create a npm init in gateway and install "ioredis"

---
# Setting Up Auth Middleware
- First we created a user controller.js in gateway which return the user from request if possible
- creating an auth middleware within gateway in which checks if there exist a pre-existing session or not if session is not expired it used the same session
- created an getCurrentUser.js in frontend to get "user" details which we fetch from api from "/me" route
- Added a useEffect within App.jsx with get user function which waits for getCurrentUser()
- removed strict mode from main.jsx

---
# create Redux Toolkit
- install it using npm
- state management by creating a store i.e centralizing the data such that it can be accessed by any file
- we can create a slice of data where data is being stored
- for that we create userSlice.js and slice.js within redux folder
- used dispatcher and selector in Home.jsx
- added dispatch in app.jsx
- used provider=store in main.jsx
- we have two types of hook here one is dispatcher and other is selector

# Chat Setup

# Agents Setup
- creating agents folder within Services and initializing npm in it and installing required packages and also adding config folder here
- setting up basic env and index.js file and adding it in main Gateway index.js file