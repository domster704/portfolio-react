import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import * as style from './AllProjects.module.css'

import backSvg from "../../../assets/image/svg/back.svg"
import {Link} from "react-router-dom";
import ProjectRow from "./ProjectRow/ProjectRow";

const AllProjects = () => {
    const projectsStore = useSelector(state => state.projects);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style.projects}>
            <Link to="/">
                <div className={style.back}>
                    <span className={style.back__imgBlock}>
                        <img alt="" src={backSvg}/>
                    </span>
                    <p>Полное резюме</p>
                </div>
            </Link>
            <h1 className={style.header}>Все проекты</h1>
            <div className={style.table}>
                <div className={`${style.row}`}>
                    <p className={`${style.col1} ${style.tableHeader} `}>Год</p>
                    <p className={`${style.col2} ${style.tableHeader} `}>Проект</p>
                    <p className={`${style.col3} ${style.tableHeader} `}>Цель</p>
                    <p className={`${style.col4} ${style.tableHeader} `}>Технологии</p>
                    <p className={`${style.col5} ${style.tableHeader} `}>Ссылки</p>
                </div>
                {
                    projectsStore.list
                        .slice()
                        .sort((a, b) => {
                            return b.year - a.year
                        })
                        .map((item, index) => {
                            return <ProjectRow key={index} project={item}/>
                        })
                }
            </div>
        </div>
    );
}

export default AllProjects;