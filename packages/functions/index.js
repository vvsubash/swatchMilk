const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
var admin = require("firebase-admin");

const functions = require("firebase-functions");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://samp-96c4e.firebaseio.com"
});
var db = admin.firestore();

const addUserOnSignUp = functions.auth.user().onCreate((user: any) => {
  let docRef = db.collection("users").doc("alovelace");

  docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
});
