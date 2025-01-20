import React from 'react';
import * as style from './ListElement.module.css'
import link from "/src/assets/image/svg/link.svg";
import {useDispatch} from "react-redux";
import {setProject} from "../../../../../store/filter";
import Skill from "../../../UI/Skill/Skill";

const Project = ({project}) => {
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(setProject(project));
    }

    return (
        <div onClick={handleOpenModal}>
            <div className={`${style.element} ${style.element_mobile_reverse}`}>
                <div className={style.elementHeader}>
                    <div className={style.imageBlock}>
                        <a href={project.image_full} target="blank">
                            <img className={style.image}
                                 src={project.image}
                                 alt=""
                                 loading='lazy'/>
                        </a>
                    </div>
                </div>
                <a href={project.links?.find(element => element?.main === true)?.link} target="blank">
                    <div className={style.specialization}>
                        <div className={style.elementBlockHeader}>
                            <div>
                                {project.name}
                                <span className={style.elementBlockHeader_linkDefault}>
                                <img
                                    className={style.elementBlockHeader_link}
                                    src={link}
                                    alt=""/>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.specializationAbout}>
                        <p dangerouslySetInnerHTML={{__html: project.about}}></p>
                    </div>
                    <div className={style.skillsList}>
                        {
                            project.skills.map((skill, index) => {
                                return <Skill key={index}>{skill}</Skill>
                            })
                        }
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Project;