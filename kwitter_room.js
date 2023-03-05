
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD85WwZ5Z7usBuv_p8nueJ2frN-7JCRXqU",
      authDomain: "iwanttokwiter.firebaseapp.com",
      databaseURL: "https://iwanttokwiter-default-rtdb.firebaseio.com",
      projectId: "iwanttokwiter",
      storageBucket: "iwanttokwiter.appspot.com",
      messagingSenderId: "715702084637",
      appId: "1:715702084637:web:73774e1341ab06202b12f4"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
