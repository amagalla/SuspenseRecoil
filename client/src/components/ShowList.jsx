import React, { Suspense, useEffect, useState } from 'react'
import { getShowState } from "../recoil/todoState"
import { useSetRecoilState } from 'recoil'
// import PostList from './PostList'

function ShowList() {
    const getShow = useSetRecoilState(getShowState)

    const OutputShow = React.lazy(() => import('./OutputShow'))

    const [postShow, setPostShow] = useState({ show: '' });

    const { show } = postShow;

    useEffect(() => {
        fetch('api/getShow')
        .then((res) => res.json())
        .then((res) => getShow(res))
    })

    function onSubmit(e) {
        e.preventDefault();
        fetch('/api/postShow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postShow),
        })
        .then((res) => res.json())
        .catch((err) => console.log(err))
    }

    return (
        <>
        <div className="showList">
            <Suspense fallback={<p>Loading...</p>}>
                <OutputShow />
            </Suspense>
        </div>
        <div className="postList">
            <form onSubmit={onSubmit}>
                <input type="text"
                className="inputBox"
                placeholder="Add Anime Show"
                value={show || ''}
                onChange={(e) => setPostShow({...postShow, show: e.target.value})}
                />
                
            </form>
        </div>   
      </>
    );
}

export default ShowList