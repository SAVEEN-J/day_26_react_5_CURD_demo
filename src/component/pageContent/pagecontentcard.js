import React from 'react'

 function Card(props) {
    
  return (
  <>
        {/* <!-- Earnings (Monthly) Card Example --> */}
        
        {props.data.length > 0 ?(
  props.data.map((data,index)=>(


        <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${data.textcolor} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${data.textcolor} text-uppercase mb-1`}>{data.text}
                                            </div>

                                    {!data.progressbar ? (
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">{data.amount}</div>

                                    ):(
                                        <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{data.amount}</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style={{width:"50%", ariavaluenow:"50", ariavaluemin:"0",ariavaluemax:"100"
                                                    }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                      

                                    )}
                                                                            </div>
                                        <div className="col-auto">
                                            <i className={`fas ${data.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  
  
  ) )
   ):(
    <h1 className='text-center'>NO DATA FOUND</h1>
   )


   }

  
  </>
  )
}

export default Card;