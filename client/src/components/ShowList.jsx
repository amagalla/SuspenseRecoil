import React, { Suspense, useEffect } from 'react'
import { getShowState } from "../recoil/todoState"
import { useSetRecoilState } from 'recoil'
// import OutputShow from "./OutputShow"

function ShowList() {
    const getShow = useSetRecoilState(getShowState)

    const OutputShow = React.lazy(() => import('./OutputShow'))

    useEffect(() => {
        fetch('api/getShow')
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .then((res) => getShow(res))
    })
    return (
        <div className="anime-list">
            <Suspense fallback={<p>Loading...</p>}>
                <OutputShow />
            </Suspense>
        </div>
    );
}

export default ShowList