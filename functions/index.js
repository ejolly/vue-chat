const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create a Firebase function that makes sure the message collection never has more than 10 documents in it, by running a function on each new document add that deletes all documents that are older than the 10 most recent messages. 
exports.onMessageCreate = functions.firestore
  .document("messages/{userId}")
  .onCreate((snap, context) => {
    const ref = admin
      .firestore()
      .collection("messages")
      .orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      let i = 0;
      let size = snapshot.size;
      let sizeToDelete = size - 10;
      console.log("Messages Count: " + size);

      snapshot.forEach(doc => {
        if (i < sizeToDelete) {
          doc.ref
            .delete()
            .then(() => {
              console.log("Document deleted successfully");
            })
            .catch(error => {
              console.log("Error removing document: " + error);
          });
        }
        i++;
      });
    });
  });

// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
