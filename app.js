const firebaseConfig = {
    apiKey: "AIzaSyDwAX7HPPzrEbRiDvS6KkVns8y2IEfVKCY",
  authDomain: "fir-2b9b9.firebaseapp.com",
  projectId: "fir-2b9b9",
  storageBucket: "fir-2b9b9.appspot.com",
  messagingSenderId: "929690840538",
  appId: "1:929690840538:web:8163dfad1b5b81e93c24e3",
  measurementId: "G-FKCSQWWHFX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log(db)

function writeData() {
    db.collection("users").add({
        firstName: "Ada",
        lastName: "Lovelace",
        email: "iqra@gmail.com",
        phone: 123456789,
        city: "Karachi"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

writeData();

function getData() {
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    });
}

getData()