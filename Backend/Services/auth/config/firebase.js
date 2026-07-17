import { cert, initializeApp } from "firebase-admin"
import serviceAccount from "../serviceAccountKey.json" with {type:"json"}

export const app = initializeApp({
  credential: cert(serviceAccount)
});

/*
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
*/