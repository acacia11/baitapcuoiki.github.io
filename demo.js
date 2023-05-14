// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


  //Điền thông tin Firebase config của cá nhân vào đây
  // Import the functions you need from the SDKs you need
 //import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFqs5pyQVoHa49iB9vF-NSfbmJyodrU2k",
    authDomain: "kc326-nhom13-5f2d6.firebaseapp.com",
    databaseURL: "https://kc326-nhom13-5f2d6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kc326-nhom13-5f2d6",
    storageBucket: "kc326-nhom13-5f2d6.appspot.com",
    messagingSenderId: "775721092317",
    appId: "1:775721092317:web:b5068edeff26000de58734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*
read.addEventListener('click',(e) =>{ 
Getval();
Getval_1();
Getval_2();
Getval_3();

});
read_1.addEventListener('click',(e) =>{ 
  getval();
  getval_1();
  getval_2();
  getval_3();
  });*/
var den_on_1 = document.getElementById("fanon_1");
var den_off_1 = document.getElementById("fanoff_1");
var den_on_2 = document.getElementById("fanon_2");
var den_off_2 = document.getElementById("fanoff_2");
var den_on_3 = document.getElementById("pumpon_1");
var den_off_3 = document.getElementById("pumpoff_1");
var den_on_4 = document.getElementById("pumpon_2");
var den_off_4 = document.getElementById("pumpoff_2");
 den_on_1.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_1/Fan/'), {
    Value : 1
   
  });
  
 }
 den_off_1.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_1/Fan/'), {
    Value : 0
   
  });
  
 }
 den_on_2.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_2/Fan/'), {
    Value : 1
   
  });
  
 }
 den_off_2.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_2/Fan/'), {
    Value : 0
   
  });
  
 }
 den_on_3.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_1/Pump/'), {
    Value : 1
   
  });
  
 }
 den_off_3.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_1/Pump/'), {
    Value : 0
   
  });
  
 }
 den_on_4.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_2/Pump/'), {
    Value : 1
   
  });
  
 }
 den_off_4.onclick = function(){
  const db = getDatabase();
  set(ref(db, 'IoT_2/Pump/'), {
    Value : 0
   
  });
  
 }
 /*
  function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'IoT_1/Fan/'), {
    Value : Number
   
  });

}
function Sends_1(){
  Number = parseFloat(document.getElementById('Number_1').value);
const db = getDatabase();
set(ref(db, 'IoT_1/Pump/'), {
  Value : Number
 
});

}
function Sends_2(){
  Number = parseFloat(document.getElementById('Number_2').value);
const db = getDatabase();
set(ref(db, 'IoT_2/Fan/'), {
  Value : Number
 
});

}
function Sends_3(){
  Number = parseFloat(document.getElementById('Number_3').value);
const db = getDatabase();
set(ref(db, 'IoT_2/Pump/'), {
  Value : Number
 
});

}*/

  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_1` + '/TempC')).then((snapshot) => {
     var temp = snapshot.val();
     document.getElementById("doC_1").innerHTML = temp;
  });
  const dbRef_1 = ref(getDatabase());
  get(child(dbRef_1, `IoT_1` + '/TempF')).then((snapshot_1) => {
     var temp_1 = snapshot_1.val();
     document.getElementById("doF_1").innerHTML = temp_1;
  });
  
  
  const dbRef_2 = ref(getDatabase());
  get(child(dbRef_2, `IoT_1` + '/Humi')).then((snapshot_2) => {
     var temp_2 = snapshot_2.val();
     document.getElementById("doam_1").innerHTML = temp_2;
  });
  
  const dbRef_3 = ref(getDatabase());
  get(child(dbRef_3, `IoT_1` + '/Lux')).then((snapshot_3) => {
     var temp_3 = snapshot_3.val();
     document.getElementById("dosang_1").innerHTML = temp_3;
  });
  
  const dbRef_4 = ref(getDatabase());
  get(child(dbRef_4, `IoT_2` + '/TempC')).then((snapshot_4) => {
     var temp_4 = snapshot_4.val();
     document.getElementById("doC_2").innerHTML = temp_4;
  });
  
  const dbRef_5 = ref(getDatabase());
  get(child(dbRef_5, `IoT_2` + '/TempF')).then((snapshot_5) => {
     var temp_5 = snapshot_5.val();
     document.getElementById("doF_2").innerHTML = temp_5;
  });
  
  const dbRef_6 = ref(getDatabase());
  get(child(dbRef_6, `IoT_2` + '/Humi')).then((snapshot_6) => {
     var temp_6 = snapshot_6.val();
     document.getElementById("doam_2").innerHTML = temp_6;
  });
  
  const dbRef_7 = ref(getDatabase());
  get(child(dbRef_7, `IoT_2` + '/Lux')).then((snapshot_7) => {
     var temp_7 = snapshot_7.val();
     document.getElementById("dosang_2").innerHTML = temp_7;
  });
  
  

     
    
   
   
/*
function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `IoT_1` + '/TempC')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Giá trị nhiệt độ là: "+snapshot.val() + "C";
     
      } else {
        console.log("No data available");
      }
    
    }).catch((error) => {
      console.error(error);
    });
  
  
}

function Getval_1(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_1` + '/TempF')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('val_1').innerHTML = "Giá trị nhiệt độ là: "+snapshot.val() + "F";
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
  
}
function Getval_2(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_1` + '/Humi')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('val_2').innerHTML = "Giá trị độ ẩm là: "+snapshot.val() + "%";
   
   
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
}
function Getval_3(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_1` + '/Lux')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('val_3').innerHTML = "Giá trị cường độ sáng là: "+snapshot.val() + "lux";
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
}
////////////////////////////////////////phân chia 2 Things////////////////////////////////////////////////////////////////////////////
function getval(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_2` + '/TempC')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('Val').innerHTML = "Giá trị nhiệt độ là: "+snapshot.val() + "C";
  
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
}
function getval_1(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_2` + '/TempF')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('Val_1').innerHTML = "Giá trị nhiệt độ là: "+snapshot.val() + "F";
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
}
function getval_2(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_2` + '/Humi')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('Val_2').innerHTML = "Giá trị độ ẩm là: "+snapshot.val() + "%";
      var abc =snapshot.val();
    
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
}
function getval_3(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `IoT_2` + '/Lux')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById('Val_3').innerHTML = "Giá trị cường độ sáng là: "+snapshot.val() + "lux";
    } else {
      console.log("No data available");
    }
  
  }).catch((error) => {
    console.error(error);
  });
}

*/