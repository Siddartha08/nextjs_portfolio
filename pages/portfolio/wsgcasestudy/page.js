import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import firebase from "firebase/app";
// import "firebase/firestore"; // Import Firestore if you're using it
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Container, Row, Col, Table, Section } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import { useCookies } from "react-cookie";
import * as styles_ws from '/styles/WSGCaseStudy.module.css'; 





function whoshouldgetitPage(props) {
    
  // const { authenticated, login } = useAuth();

  // useEffect(() => {
  //   if (!authenticated) {
  //     setShowModal(true);
  //   }
  // }, [authenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      setShowModal(false);
    } else {
      alert('Incorrect password');
    }
  };

    var randomIndex1 = randomNumber(1, 42, -1);
    var randomIndex2 = randomNumber(1, 42, randomIndex1)
  
    const[cookie, setCookie] = useCookies(["user"]);
  
    function handleCookie() {
      let cook = Math.floor(Math.random() * (100000000 - 1)) + 1
      setCookie("user", cook, {
        path:"/"
      });
  
    }

    var [showdata, setShowData] = useState(true)

  
    const [tencount, tenCountChange] = useState(0);
  
   
  
    var [allResultsVal, setAllResultsVal] = useState([])
    var [RevResultsVal, setRevResultsVal] = useState([])
    const [set, toBeSet] = useState([])
    const [noLoad, noLoadSet] = useState(false)
  
    
    
  
    function randomNumber(max , min, except) {
      let num = Math.floor(Math.random() * (max - min)) + min;
      return (num === except) ? randomNumber(max, min, except) : num;
    }
  
    function wrapper(value, setValue){
      //invokes both count and setToSend at the same time
      //doing both inline was impossible with functional components
      Count(value)
      setToSend(setValue)
    }

    function resetSET(){
        //resets the set value and tencount outside of the count function
        //i kept getting off by one errors within the Count function
        if(tencount === 10){
          toBeSet([])
          tenCountChange(0)
          if(showdata === false) {
            setShowData(true)
          }
        }
      }
      //invokes resetSET() before the count function can run again on click
    resetSET()

    function Count(value) {
   


        if(value < 10) {
          if(value + 1 === 11) {
            tenCountChange(1)
            toBeSet([])
          }
            tenCountChange(value + 1)
          // newGroups()
        } else if (value === 10) {
            tenCountChange(1)
            toBeSet([])
            // newGroups()
            //do something else 
        }
        
    }

    randomIndex1 = randomNumber(1, 42, -1);
    randomIndex2 = randomNumber(1, 42, randomIndex1)
   
    const categories = {
      1: "Doctors",
      2: "Nurses",
      3: "Hospital Admin Staff",
      4: "Hospital Cleaners",
      5: "Childcare providers",
      6: "Teachers",
      7: "Mental Health Professionals",
      8: "Post Office Workers",
      9: "Law enforcement",
      10: "Firemen/Women",
      11: "EMTs",
      12: "White collar workers",
      13: "Elderly",
      14: "Prisoners",
      15: "Grocery Store Workers",
      16: "Food Manufacturer Employees",
      17: "Journalists",
      18: "Politicians",
      19: "Construction Workers",
      20: "Hollywood Actors",
      21: "Black Community",
      22: "Latino Community",
      23: "Native American Community",
      24: "Asian Community",
      25: "White Community",
      26: "Ride Share Drivers",
      27: "Covid19 Deniers",
      28: "Factory Workers",
      29: "Restaurant Workers",
      30: "Public Transit Workers",
      31: "Religious Leaders",
      32: "People making below $50,000",
      33: "People making above $250,000",
      34: "Military personnel",
      35: "Airline Pilots and Flight Attendants",
      36: "Food Delivery Drivers",
      37: "Retail Store Staff",
      38: "Infrastructure Workers",
      39: "Judges",
      40: "Air Traffic Controllers",
      41: "Medical Equipment Manufacturing Workers",
      42: "Professional Athletes",
    }

    function setToSend(value) {
    
        set.push(value)
        
    
      }
    
    useEffect(() => {
        randomIndex1 = randomNumber(1, 42, -1);
        randomIndex2 = randomNumber(1, 42, randomIndex1)
        handleCookie()
        // console.log(cookie)
        toBeSet([])
        // console.log(set)
        const firebaseConfig = { 
        apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_APP_FIREBASE_AUTH_DOAMIN,
        projectId: process.env.NEXT_PUBLIC_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_API_ID,
    
        }
      //#if() {
      const app = initializeApp(firebaseConfig);
      //} else {
      const db = getFirestore(app)
      //}
    
     
      var topRankings = []
      var topRankings2 = []
      var bottomRankings = []
      // var bottomRankings2 = []
      // var topResults = []
      // var bottomResults = []
      var allComparison = []
      var allResults = []
      var revResults = []
      // var ReceivedData= 0
      // var comparison = []
    
        //const db = firebase.firestore();
        
      async function getCollection(db) {
        const data = collection(db, 'submissions');
        const data2 = await getDocs(data);
        const data3 = data2.docs.map(doc => 
          topRankings = {type:doc.data().sentSet.comp["0"], value: 1},
          bottomRankings = {type:doc.data().sentSet.comp["1"], value: 1});
        return data3
        }
        
        const data3 = collection(db, 'submissions')
        if(showdata === true) {
          const getAndCreateData = () => {
          // Suggested code may be subject to a license. Learn more: ~LicenseLog:2530826993.
          getDocs(data3).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
            });
          });
          // const data2 = getDocs(data3)
          // data2.docs.map(doc => 
          //   topRankings = {type:doc.data().sentSet.comp["0"], value: 1})
          //   bottomRankings = {type:doc.data().sentSet.comp["1"], value: 1}

          // data3.get().then((QS) => {
          
          //   const tempDoc = QS.docs.map((doc) =>{
          //     topRankings.push({type: doc.data().sentSet.comp["0"], value: 1})
          //     bottomRankings.push({type: doc.data().sentSet.comp["1"], value: 1})
              
    
             
          //     return 
          //   })
      
            topRankings.forEach((element) => {
              allComparison.push(element)
            })
            bottomRankings.forEach((element) =>{
              allComparison.push(element)
            })
            
    
            topRankings.forEach(function(e) {
              if(!this[e.type]) {
                this[e.type] = {type: e.type, value: 0}
                topRankings2.push(this[e.type])
              }
              this[e.type].value += e.value;
            }, Object.create(null))
    
    
    
            allComparison.forEach(function(e) {
              if(!this[e.type]) {
                this[e.type] = {type: e.type, value:0}
                allResults.push(this[e.type])
              }
              this[e.type].value += e.value;
            }, Object.create(null))
            
            allResults.forEach(function(e) {
              for(let i = 0; i < topRankings2.length; i++){
                if(e.type === topRankings2[i].type){
                  e.percentage = parseInt(((topRankings2[i].value)/parseFloat(e.value)*100).toFixed(2))
                  i++
                } else {
                  
                }
              }
              for(let j = 0; j < allResults.length; j++){
                if(e.percentage === undefined) {
                  e.percentage = 0;
                }
              }
            })
    
              //set revResults to a new array with parse and stringify so that I can have two seperate sorted arrays
               revResults = JSON.parse(JSON.stringify(allResults))
               revResults.sort((a, b) => ((a.percentage < b.percentage) ? -1 : (a.value > b.value) ? 1 : 0))
               allResults.sort((a, b) => ((a.percentage > b.percentage) ? -1 : (a.value > b.value) ? 1 : 0))
    
    
               
            
        
    
              allResultsVal.push(allResults)
              RevResultsVal.push(revResults)
               
    
               setAllResultsVal([...allResultsVal])
               setRevResultsVal([...RevResultsVal])
       
               noLoadSet(true)
               
    
      
          }
     
    
        
        getAndCreateData()
      
      }
},[showdata])      

    return (
<div className={styles_ws.section}> 
    <h1 className={styles_ws.title}>Who Should Get It First? Case Study</h1>
    <div className={styles_ws.tableContainer}>

    </div>
    <div className={styles_ws.dataUpdateMessage}>
        *Data updates on the screen after the first 10 submissions.
    </div>
    <div className={styles_ws.feedbackMessage}>
        Questions or feedback? Email us at whoshouldgetitfirst@gmail.com
    </div>
</div>
   
    );
  }
  export default whoshouldgetitPage;




