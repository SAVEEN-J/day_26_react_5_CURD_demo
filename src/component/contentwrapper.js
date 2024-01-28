import React from 'react'

import Topnavbar from './topnavbar'

import Dashboardcurd from '../CURD/DashbordCurd';
import Card from './pageContent/pagecontentcard';
// import Chart from './chart';
// import Container from './container';
import {Buttons} from './Components/Buttons'
import {Link, Route, Routes } from "react-router-dom";
import { Cards } from './Components/Cards';
import UserTable from '../CURD/UserTable';
import { createContext } from 'react';

export const UserDemoDataContext=createContext();
function Contentwrapper({EarningsDAta}) {
  //  console.log(EarningsDAta);
  let Currentyear=new Date().getFullYear();
  let userName="Saveen"

  
  let  DemoTable=[
  
    {
      id:1,
      text: "Earnings (Monthly)",
      amount: "$40,000",
   
    },
    {
      id:2,
      text: "Earnings (Annual)",
      amount: "$215,000",
     
    },

  ];
  return (
    <>
    <UserDemoDataContext.Provider value={DemoTable}>
      {/* {console.log("DemoTable",DemoTable[0].id)} */}
       {/* <!-- Content Wrapper --> */}
       <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
        <div id="content">
               <Topnavbar/>
            
    
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                {/* <Routes>
                  <Route path='/' element={ <Dashboardcurd /> } />
                  </Routes> */}

                  <Dashboardcurd/>

                   { <div className="row">
                 
                       {/* <Routes>
                   
                                 
                          <Route path='/' element={ <Card  data={EarningsDAta} />  } />
                 
                     </Routes> */}
                 
                </div> }
        <div className='row'>
          
              <Routes>
              <Route path='/cards' element={ <Cards /> } />
          
              </Routes>

        </div>
                <div className='row'>
                  {/* curd */}
                  <Routes>
                    <Route path='/curd' element={<UserTable />}/>
                  </Routes>
                </div>
                
                    {/* <!-- Content Row --> */}

                    <div className="row">
                         <Routes>
                        <Route path='/button' element={ <Buttons /> } />

                        </Routes>

                      {/* <Chart /> */}

                    </div>
                     {/* <!-- Content Row --> */}
                 <div className="row">
                  {/* <Container/> */}

                    </div>
   


                </div>
   
    



    </div>

      {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; {userName} Website {Currentyear}</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}
    </div>
    </UserDemoDataContext.Provider>
    </>
   
  )
}

export default Contentwrapper