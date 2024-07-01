import "./App.css";
import { Hero } from "./components/Hero";
import { LaunchVideo } from "./components/LaunchVideo/LaunchVideo";
import { Layout } from "./components/Layout";

import React, { useState } from "react";

function App() {

  const [ infoMarvel, setInfoMarvel ] = useState([])
  const [ error, setError ] = useState(null)
  const [ skipVideo, setSkipVideo ] = useState(false)



    return (
    <div className="containerApp">
        <LaunchVideo skipVideo={skipVideo} setSkipVideo={setSkipVideo} />
        <Layout infoMarvel={infoMarvel} setInfoMarvel={setInfoMarvel} setError={setError}>
          <Hero infoMarvel={infoMarvel} skipVideo={skipVideo}/>

        </Layout>
    </div>
  );
}

export default App;
