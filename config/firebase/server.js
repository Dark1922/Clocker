import firebaseServer from "firebase-admin"

firebaseServer.initializeApp({
  credential: firebaseServer.credential.cert({
    type: process.env.TYPE,
  })
});

export { firebaseServer }