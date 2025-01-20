import React from 'react';
import * as style from './ListElement.module.css'

import link from '/src/assets/image/svg/link.svg'
import Skill from "../../../UI/Skill/Skill";

const Job = ({job}) => {
    return (
        <a href={job.companyURL} target="blank">
            <div className={style.element}>
                <div className={style.elementHeader}>{job.date}</div>
                <div>
                    <div className={style.specialization}>
                        <div className={style.elementBlockHeader}>
                            <div>
                                {job.position}&nbsp;·&nbsp;{job.companyName}
                                <span className={style.elementBlockHeader_linkDefault}>
                                    <img
                                        className={style.elementBlockHeader_link}
                                        src={link}
                                        alt=""/>
                                </span>
                            </div>
                        </div>
                        <div className={style.elementBlockUnderHeader}>
                            {
                                job.subPosition.map((pos, index) =>
                                    <p key={index}>
                                        {pos}
                                    </p>)
                            }
                        </div>
                    </div>
                    <div className={style.specializationAbout}>
                        <p dangerouslySetInnerHTML={{__html: job.about}}></p>
                    </div>
                    <div className={style.skillsList}>
                        {
                            job.skills.map((skill, index) => {
                                return <Skill key={index}>{skill}</Skill>
                            })
                        }
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Job;