import React from "react";
import ShowList from "./components/ShowList"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import RecoilizeDebugger from 'recoilize';

function App() {
  return (
    <>
      <RecoilRoot>
        <RecoilizeDebugger/>
        <div>
          <h1 className="anime-title">Anime Watched List</h1>
        </div>
        <div className="showList">
          <ShowList />
        </div>
        </RecoilRoot>
      </>
  );
}

export default App;
