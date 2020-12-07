import React, { useEffect } from 'react'
import { getShowState } from "../recoil/todoState"
import { useRecoilValue } from 'recoil'
import RealOutPut from './RealOutPut'

function OutputShow() {

    const displayShows = useRecoilValue(getShowState)

    // console.log(displayShows);

    // useEffect(() => {
    //     if (displayShows.length > 0) {

    //     }
    // },[displayShows])

    // displayShows.forEach((element) => {
    //     console.log(element.show);
    // })

    // const resultShows = displayShows.map((element, index) => {
    //     element.show
    // })

    return (
        <div>
        {displayShows && displayShows.map((element) => ( 
            <RealOutPut result={element} />
        ))}
        </div>
    )
}
export default OutputShow

// key={index}
// index={index}
// showData={element}