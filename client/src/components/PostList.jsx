import React, { useEffect, useState } from 'react'
import { getShowState } from "../recoil/todoState"
import { useSetRecoilState } from 'recoil'

function onSubmit() {

}

function PostList() {
    const getShow = useSetRecoilState(getShowState)
    
    return (
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
    )
}

export default PostList;