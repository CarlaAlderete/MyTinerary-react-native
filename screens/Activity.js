import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Text} from 'react-native'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Activity=({route,itineraryId,getActivitiesByItinerary})=>{
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <Text>soy activiti</Text>
        // <>
        //     <h2>Activities to do</h2>
        //     <div className='activities'>
        //         {!activities.length ? <h2>There are not activity yet!</h2> : activity}
        //     </div>
        // </>
    )
}
export default connect(null, null)( Activity) 


//     useEffect(()=>{
//         getActivitiesByItinerary(itineraryId)
//         .then(res=>{
//             if(res.success){
//                 setActivities(res.res)
//                 setLoading(false)
//             }else{
//                 console.log(res)
//             }
//         })
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])

//     let activity=activities.map((obj, index)=>{
//         return(
//             <div className='activity' key={index} style={{backgroundImage:`url("${obj.src}")`}}>
//                 <div>
//                     <h4>{obj.name}</h4>
//                     <p>{obj.description}</p>
//                 </div>
//             </div>
//         )
//     })

// if(loading){
//     return <img  className='loading' src='/assets/loading.gif' alt='loading...'/>
// }

// }
// const mapDispatcToProps={
//     getActivitiesByItinerary:itinerariesActions.getActivitiesByItinerary
// }
// 