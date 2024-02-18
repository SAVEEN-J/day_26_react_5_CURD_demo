
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import { React , createContext, useState ,useContext, useEffect, useRef} from "react";
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


let  EarningsDAta=[
  
  {
    id:1,
    text: "Earnings (Monthly)",
    amount: "$40,000",
    textcolor: "primary",
    icon: "fa-calendar",
    progressbar: false
  },
  {
    id:2,
    text: "Earnings (Annual)",
    amount: "$215,000",
    textcolor: "success",
    icon: "fa-dollar-sign",
    progressbar: false
  },
  {
    id:3,
    text: "Tasks",
    amount: "50%",
    textcolor: "info",
    icon: "fa-clipboard-list",
    progressbar: true
  },
  {
    id:4,
    text: "Pending Requests",
    amount: "18",
    textcolor: "warning",
    icon: "fa-comments",
    progressbar: false
  },
];
// Create a new context and export
export const AllDataContext =createContext();

// Create a Context Provider
const AllDataContextProvider =({children})=>{
  const[show,setShow]=useState(false);

//get alluser data form backend
  const[tabledata,setTabledata]=useState([]);

  const hiddenidPass=tabledata.length +1
  // console.log("hiddenidPass",hiddenidPass);
  
  //add New user
const[userUniqeId,setuserUniqeId]=useState();
// console.log("newhiddenidaa",newhiddenid);
// console.log("setnewhiddenid",newhiddenid);

  const[newfname,setNewfname]=useState('');
const[newLname,setNewLname]=useState('');
const[newEmail,setNewEmail]=useState('');
  //user table when user click to edit
 const[tableClickdelete,setTableClick]=useState([]);
//edit data
const[hiddeneditid,seteditid]=useState('');
 const[firstname,setFirstName]=useState('');
 const[lastname,setLaststname]=useState('');
 const[email,setEmail]=useState('');


 const[refresh,setRefersh]=useState(false)
//get All data from -json server  
useEffect( () => {
 let a =async()=>{
  const responce = await axios.get('http://localhost:3005/UserData/');
  //  .then(responce =>setOptions(responce.data));
  setTabledata(responce.data);
  setuserUniqeId(responce.data.length+1);

 };
  a();
},[refresh]);

//add user
const newNoteRef =useRef(null);
const navigate=useNavigate();

 let handleSumbmit=async(event)=>{
  event.preventDefault();
  const hiddenidPass=tabledata.length +1
  // console.log("hiddenidPass",hiddenidPass);
   let noteObject = {
     id:tabledata.length + 1,
     UniqeId:userUniqeId,
     firstname: newfname,
     lastname: newLname,
     email:newEmail
   }
   await axios
    .post('http://localhost:3005/UserData/',noteObject)
    // setnewhiddenid('')
    setNewfname('');
    setNewLname('');
    setNewEmail('');
   newNoteRef.current.focus();
   setRefersh(!refresh)
   navigate('/dashbord');
 }
 //EDIT
 
 let handleeditSubmit=async(event)=>{
  event.preventDefault();
      try {
            await axios.put(`http://localhost:3005/UserData/${hiddeneditid}`, {
              id:hiddeneditid,        
               firstname,
               lastname,
               email
               
            });
        } catch (error) {
            console.error('Error updating note:', error);
        }
        setRefersh(!refresh)
        navigate('/dashbord');
  
}
let trhandleClick=(tableRowClick)=>{
  // console.log("tableRowClick-index",tableRowClick);
  setTableClick(tableRowClick)
  if (tableRowClick.id >0) {
//  let displayblock=document.getElementsByClassName(".hidden")visible

// document.getElementById("hidden").style.display   = "show";
seteditid(tableRowClick.id)
setFirstName(tableRowClick.firstname)
setLaststname(tableRowClick.lastname)
setEmail(tableRowClick.email)

 }
}
//delete
<<<<<<< HEAD

let handleClose=(event)=>{


}

let handleDelete=(event)=>{
// console.log(tableClickdelete);
if (tableClickdelete) {
  setShow(true)
} else {
  
}
 
  // console.log("close",show);
}


let handleClosedelete=async(event)=>{
   event.preventDefault();
          
                try {

          axios.delete(`http://localhost:3005/UserData/${hiddeneditid}`, {
          id:hiddeneditid,        
          firstname,
          lastname,
          email

          }
          );
       
          setRefersh(!refresh)

          navigate('/dashbord');

          } catch (error) {
          console.error('Error updating note:', error);


          }
        


        
          setRefersh(!refresh)

          navigate('/dashbord');

    
      } 
 
      let goback=()=>{
        setRefersh(!refresh)
=======
>>>>>>> 38b144669d6627e8fd144f8c7c089cd89be19a24

let handleClose=(event)=>{

<<<<<<< HEAD
      }

// if (tableClick) {
//       try {

//              axios.delete(`http://localhost:3005/UserData/${hiddeneditid}`, {
//               id:hiddeneditid,        
//                firstname,
//                lastname,
//                email
               
//             }
//             );
           

//         } catch (error) {
//             console.error('Error updating note:', error);
//         }
//         setRefersh(!refresh)

//         navigate('/dashbord');

 
// } else {
  
// }

  // event.preventDefault();
  //     try {
  //           await axios.delete(`http://localhost:3005/UserData/${hiddeneditid}`, {
  //             id:hiddeneditid,        
  //              firstname,
  //              lastname,
  //              email
               
  //           });
  //       } catch (error) {
  //           console.error('Error updating note:', error);
  //       }
  //       setRefersh(!refresh)

  //       navigate('/dashbord');
  
// }
=======

}

let handleDelete=(event)=>{
// console.log(tableClickdelete);
if (tableClickdelete) {
  setShow(true)
} else {
  
}
 
  // console.log("close",show);
}
>>>>>>> 38b144669d6627e8fd144f8c7c089cd89be19a24


let handleClosedelete=async(event)=>{
   event.preventDefault();
          
                try {

          axios.delete(`http://localhost:3005/UserData/${hiddeneditid}`, {
          id:hiddeneditid,        
          firstname,
          lastname,
          email

          }
          );
       
          setRefersh(!refresh)

          navigate('/dashbord');

          } catch (error) {
          console.error('Error updating note:', error);


          }
       
          setRefersh(!refresh)
          navigate('/dashbord');
    
      } 
       let goback=()=>{
        setRefersh(!refresh)
        navigate('/dashbord');

      }

return(
 <AllDataContext.Provider
  value={{
    tabledata,
    setTabledata,

    handleSumbmit,
    userUniqeId,
    setuserUniqeId,
    newNoteRef,
    newfname,
    setNewfname,
    newLname,
    setNewLname,
    newEmail,
    setNewEmail,
<<<<<<< HEAD
    
   

=======
 
>>>>>>> 38b144669d6627e8fd144f8c7c089cd89be19a24
    handleeditSubmit,
    trhandleClick,
    hiddeneditid,
    seteditid,
    firstname,
    setFirstName,
    lastname,
    setLaststname,
    email,
    setEmail,

     tableClickdelete,
    setTableClick,
    handleDelete,
    handleClose,
    show,
    setShow,
    handleClosedelete,
    goback


  }}
 >
  {children}

 </AllDataContext.Provider>
);

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <AllDataContextProvider>
  <App EarningsDAta={EarningsDAta} />
  </AllDataContextProvider>
  


 </Router>
   

);

