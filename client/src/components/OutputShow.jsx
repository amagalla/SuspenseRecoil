import React, { useEffect } from 'react'
import { getShowState } from "../recoil/todoState"
import { useRecoilValue } from 'recoil'
import Output from './Output'

function OutputShow() {

    const displayShows = useRecoilValue(getShowState)

    return (
        <div>
        {displayShows && displayShows.map((element) => ( 
            <Output result={element} />
        ))}
        </div>
    )
}
export default OutputShow