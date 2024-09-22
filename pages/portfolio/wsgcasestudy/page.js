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
import Footer from '../../../components/Footer';
import ResumeSection from '/components/ResumeSection';



function whoshouldgetitPage(props) {
  

  
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app)

  const subs = []

  // async function getSubmissions() { 
  //   const subs = []
  //   const submissionsCol = collection(db, 'submissions'); 
  //   const submissionSnapshot = await getDocs(submissionsCol); 
  //   submissionSnapshot.forEach((doc) => {
  //     subs.push({id: doc.id, ...doc.data()});
  //   })
  //   //console.log(subs)
  //   return subs
  // }
  // const subData = await getSubmissions()
  // console.log(subdata)

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

    //var [showdata, setShowData] = useState(true)
    var [fsdata, setFsData] = useState([])
  
    const [tencount, tenCountChange] = useState(0);
  
   
  
    //var [allResultsVal, setAllResultsVal] = useState([])
    //var [RevResultsVal, setRevResultsVal] = useState([])
    const [set, toBeSet] = useState([])
    //const [noLoad, noLoadSet] = useState(false)
    const [allResultsVal, setAllResultsVal] = useState([]);
    const [revResultsVal, setRevResultsVal] = useState([]);
    const [noLoad, setNoLoad] = useState(false);
    const [showdata, setShowData] = useState(false)
    
    
  
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
    
      const firebaseConfig = { 
        apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_APP_FIREBASE_AUTH_DOAMIN,
        projectId: process.env.NEXT_PUBLIC_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_API_ID,
      
        }

        const app = initializeApp(firebaseConfig);
        //} else {
        const db = getFirestore(app)

        useEffect(() => {
          console.log('useEffect triggered');
      
          const fetchData = async () => {
            if (showdata === true) {
              console.log('showdata is true');
      
              // Generate random indices and handle cookies
              const randomIndex1 = randomNumber(1, 42, -1);
              const randomIndex2 = randomNumber(1, 42, randomIndex1);
              handleCookie();
              toBeSet([]);
      
              console.log('Random indices:', randomIndex1, randomIndex2);
      
              // Initialize arrays and maps for processing
              const topRankings = [];
              const bottomRankings = [];
              const allComparison = [];
              const topRankingsMap = {};
              const allResultsMap = {};
      
              try {
                // Get the 'submissions' collection from Firestore
                const submissionsCollection = collection(db, 'submissions');
                console.log('submissionsCollection:', submissionsCollection);
      
                const querySnapshot = await getDocs(submissionsCollection);
                console.log('querySnapshot:', querySnapshot);
      
                // Process each document in the collection
                querySnapshot.forEach((doc) => {
                  const data = doc.data();
      
                  // Assuming sentSet.comp is an array
                  topRankings.push({ type: data.sentSet.comp[0], value: 1 });
                  bottomRankings.push({ type: data.sentSet.comp[1], value: 1 });
                });
      
                console.log('Top Rankings:', topRankings);
                console.log('Bottom Rankings:', bottomRankings);
      
                // Combine top and bottom rankings
                allComparison.push(...topRankings, ...bottomRankings);
                console.log('All Comparison:', allComparison);
      
                // Create a map for top rankings to count occurrences
                topRankings.forEach((item) => {
                  if (!topRankingsMap[item.type]) {
                    topRankingsMap[item.type] = { type: item.type, value: 0 };
                  }
                  topRankingsMap[item.type].value += item.value;
                });
      
                // Create a map for all results to count occurrences
                allComparison.forEach((item) => {
                  if (!allResultsMap[item.type]) {
                    allResultsMap[item.type] = { type: item.type, value: 0 };
                  }
                  allResultsMap[item.type].value += item.value;
                });
      
                console.log('Top Rankings Map:', topRankingsMap);
                console.log('All Results Map:', allResultsMap);
      
                // Convert the maps to arrays
                const topRankingsArray = Object.values(topRankingsMap);
                const allResultsArray = Object.values(allResultsMap);
      
                // Calculate percentages
                allResultsArray.forEach((item) => {
                  const topItem = topRankingsMap[item.type];
                  if (topItem) {
                    item.percentage = parseFloat(
                      ((topItem.value / item.value) * 100).toFixed(2)
                    );
                  } else {
                    item.percentage = 0;
                  }
                });
      
                console.log('All Results with Percentages:', allResultsArray);
      
                // Create copies for sorting
                const sortedResults = [...allResultsArray].sort(
                  (a, b) => b.percentage - a.percentage
                );
                const revSortedResults = [...allResultsArray].sort(
                  (a, b) => a.percentage - b.percentage
                );
      
                console.log('Sorted Results:', sortedResults);
                console.log('Reverse Sorted Results:', revSortedResults);
      
                // Update state variables
                setAllResultsVal(sortedResults);
                setRevResultsVal(revSortedResults);
                setNoLoad(true);
      
                console.log('Data fetching and processing complete.');
              } catch (error) {
                console.log('Error fetching data:', error);
                return
              }
            } else {
              console.log('showdata is false');
            }
          };
      
          fetchData();
        }, [showdata]);   
      
    return (
<div className={styles_ws.section}> 
    <h1 className={styles_ws.title}>Who Should Get It First? Case Study</h1>
    <div className="card">
      <div className="card-container">
        <div className="card-content">
          <div className="centered-content">
            <div className="stretch-content">
              <div style={{  
                display: "flex",
                justifyContent: "center"}} 
                className='format-content'>
              <div className="features-section__item has-text-centered">
                <a style={{
                    display: "block",
                    width: "250px",
                    height: "100px",
                    background: "#007bff",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                    lineHeight: "25px",
                    
              }} className="d-none d-md-block"
                  onClick={() => wrapper(tencount, [randomIndex1, randomIndex2])}
                >
                  {categories[randomIndex1]}
                </a>
                <a
                  onClick={() => wrapper(tencount, [randomIndex1, randomIndex2])}
                  className="d-lg-none d-xl-none d-md-none button"
                >
                  {categories[randomIndex1]}
                </a>
              </div>
              <div className="center-content">
                <div style={{margin: "10px"}} className="or-section">or</div>
              </div>
              <div className="stretch-content">
                <div className="features-section__item has-text-centered">
                  <a style={{
                    display: "block",
                    width: "250px",
                    height: "100px",
                    background: "#007bff",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                    lineHeight: "25px",
              }}
                    className="d-none d-md-block"
                    onClick={() => wrapper(tencount, [randomIndex2, randomIndex1])}
                  >
                    {categories[randomIndex2]}
                  </a>
                </div>
                </div>
                </div>
              <div style = {{
                width: "100%",
                textAlign: "center"
              }} className="center-content">
                {tencount} / 10
              </div>
            
          </div>
        </div>
      </div>
    </div>

    <div className={styles_ws.tableContainer}>
    <Table striped bordered hover>
      <thead>
        <th>Categories</th>
        <th>Percentage</th>
        <th># of Appearances</th>
      </thead>
      <tbody>
        {noLoad === false ? (
          <tr>
            <td colSpan="3">Loading...</td>
          </tr>
        ) : (
          allResultsVal &&
          allResultsVal.map((item, i) => (
            <tr className={i < 8 ? "" : "d-none"} key={i}>
              <td className={i < 8 ? "" : "d-none"}>
                {categories[item.type]}
              </td>
              <td className={i < 8 ? "" : "d-none"}>
                {item.percentage}%
              </td>
              <td className={i < 8 ? "" : "d-none"}>
                {item.value}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table> 
    </div>
    <div className={styles_ws.dataUpdateMessage}>
        *Data updates on the screen after the first 10 submissions.
    </div>
    <div className={styles_ws.feedbackMessage}>
        Questions or feedback? Email us at whoshouldgetitfirst@gmail.com
    </div>
    </div>
    <ResumeSection/>
    <Footer></Footer>
  </div>
    );
  }
  export default whoshouldgetitPage;




