import React, {useEffect, useLayoutEffect} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Resume from "./components/page/Resume/Resume";

import * as style from './style.css';
import AllProjects from "./components/page/AllProjects/AllProjects";
import ProjectPopup from "./components/page/UI/ProjectPopup/ProjectPopup";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProjects} from "./http/projectThunk";
import {fetchAllJobs} from "./http/jobThunk";

const App = () => {
    const spotlightRef = React.useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch() {
            await dispatch(fetchAllProjects());
            await dispatch(fetchAllJobs());
        }

        fetch().then();
    }, []);

    useLayoutEffect(() => {
        const spotlight = spotlightRef.current;
        window.addEventListener('mousemove', e => updateSpotlight(e));
        window.addEventListener('mousedown', e => updateSpotlight(e));
        window.addEventListener('mouseup', e => updateSpotlight(e));

        function updateSpotlight(event) {
            const x = event.clientX / window.innerWidth * 100;
            const y = event.clientY / window.innerHeight * 100;

            spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(29, 78, 216, 0.15) 0%, rgba(0, 0, 0, 0.00) 50.00%)`;
        }

        return () => {
            window.removeEventListener('mousemove', updateSpotlight);
            window.removeEventListener('mousedown', updateSpotlight);
            window.removeEventListener('mouseup', updateSpotlight);
        }
    }, [spotlightRef.current]);

    return (
        <>
            {/*<ProjectPopup/>*/}
            <div className={style.spotlight} ref={spotlightRef}></div>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Resume/>}/>
                    <Route exact path="/projectList/*" element={<AllProjects/>}/>
                </Routes>
            </HashRouter>
        </>

    );
};

export default App;
