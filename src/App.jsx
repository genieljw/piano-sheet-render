// //import {useState, useEffect} from "react";
// import MusicXMLRenderer from "./components/MusicXMLRenderer";

// const App = () => {

//   return (
//     <div>
//       <h1>Canon</h1>
//       <MusicXMLRenderer />
//     </div>
//   );
// };

// export default App;

import OSMDRenderer from './components/OSMDRenderer';
import "./App.css";

function App() {
  return (
    <div>
      <div id="root">
        <h1>Sheet Music Viewer</h1>
        <OSMDRenderer />
      </div>
    </div>
  );
}

export default App;
