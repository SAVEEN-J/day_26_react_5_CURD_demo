import React from 'react'
import { SlideBar } from './SlidebarNav'
import Contentwrapper from './contentwrapper'



function Wrapperpage({EarningsDAta}) {

    // let Currentyear=new Date().getFullYear();
    // console.log(Currentyear);
  return (
    <>
 
    {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
    
        <SlideBar/>
        <Contentwrapper EarningsDAta={EarningsDAta} />
        
     

    
      </div>
        {/* <!-- End of Content Wrapper --> */}
    
    
    </>
  )
}



export default Wrapperpage;