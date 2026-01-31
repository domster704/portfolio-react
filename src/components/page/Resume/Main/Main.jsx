import React, {useLayoutEffect} from 'react';
import {useSelector} from "react-redux";
import * as style from './Main.module.css'
import * as styleMain from './Main.module.css'

import next from '/src/assets/image/svg/next.svg';

import {SocialNetwork} from "../Header/Header";
import Job from "./ListElement/Job";
import Project from "./ListElement/Project";
import {Link} from "react-router-dom";
import Achievements from "./Achievements/Achievements";
import * as styleHeader from "../Header/Header.module.css";

const Main = () => {
    const jobs = useSelector(state => state.jobs);
    const projects = useSelector(state => state.projects);


    useLayoutEffect(() => {
        const PX_IN_REM = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const deltaScroll = PX_IN_REM * 6;

        function handleScroll() {
            const projectsList = document.querySelector(`.${styleMain.projectsList}`);
            const jobList = document.querySelector(`.${styleMain.jobsList}`);

            let listOfChosenItems = document.getElementsByClassName(styleHeader.blockLinkList_element);
            for (let i of listOfChosenItems) {
                i.classList.remove(styleHeader.active);
            }

            if (projectsList.getBoundingClientRect().top < deltaScroll) {
                listOfChosenItems[2].classList.add(styleHeader.active)
            } else if (jobList.getBoundingClientRect().top < deltaScroll) {
                listOfChosenItems[1].classList.add(styleHeader.active)
            } else {
                listOfChosenItems[0].classList.add(styleHeader.active)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (<main className={style.main}>
            <div>
                <div className="mobile-about">О себе</div>
                <div className={style.about}>
                    <p>
                        Я — Middle Full‑stack разработчик с 4+ годами опыта. Сочетаю навыки фронтенда (ReactJS/NextJS),
                        бэкенда (FastAPI/Python) и DevOps (Docker, Linux, Ansible). Имею опыт разработки веб‑сервисов,
                        мобильных приложений (Kotlin/Jetpack Compose), автоматизации развёртывания (OpenBalena) и
                        мониторинга (Zabbix). Стремлюсь к чистым архитектурам и надёжным решениям — умею вести проект от
                        проектирования до установки в прод.
                    </p>
                    <p>
                        Призёр и победитель крупнейшёго международного хакатона ЛЦТ (Лидеры цифровых
                        трансформаций):&nbsp;
                        <b><a href="https://www.mos.ru/news/item/161544073/">1 место</a></b> в 2025 году и&nbsp;
                        <b><a href="https://www.mos.ru/news/item/140733073/">3 место</a></b>&nbsp;
                        в 2024 году (в обоих случаях название команды - "МИСИС Два миллиона").
                    </p>
                    <p>
                        Мобильную разработку я изучил в <a href="https://www.samsung.com/ru/inrussia/school/"
                                                           target="_blank"> IT School Samsung</a>.
                        После этого я работал в компании <a href="https://amberizh.ru/" target="_blank">Янтарь+</a> 3
                        года. Параллельно с этим набирал опыт в следующих компаниях: ПРОНЕТКОМ и Dial Digital Agency.
                    </p>
                    <p>
                        Мой ключевой стек включает разработку клиент-серверных веб-приложений, PWA и SPA
                        с использованием <a href="https://react.dev/" target="_blank">ReactJS</a> /
                        <a href="https://nextjs.org/" target="_blank">&nbsp;NextJS</a> на фронтенде и

                        <a href="https://fastapi.tiangolo.com/" target="_blank">&nbsp;FastAPI</a> на бэкенде.
                        Работаю с <a href="https://www.postgresql.org/" target="_blank">&nbsp;PostgreSQL</a>,
                        применяю SQLAlchemy, Alembic и придерживаюсь принципов чистой архитектуры и DDD.
                        Имею опыт администрирования Linux-серверов, настройки
                        <a href="https://www.nginx.org/" target="_blank">&nbsp;Nginx</a>,
                        контейнеризации с Docker / Docker Compose, автоматизации через Ansible
                        и выпуска SSL-сертификатов с Certbot.
                    </p>
                    <p>
                        Также я получаю высшее образование в <a href="https://misis.ru/" target="_blank">НИТУ
                        МИСИС&nbsp;</a> по специальности <a
                        href="https://misis.ru/applicants/admission/baccalaureate-and-specialty/faculties/math/"
                        target="_blank">&nbsp;прикладная математика</a> и продолжаю развиваться как Full&#8209;stack
                        разработчик.
                    </p>
                </div>
                <Achievements/>
                <SocialNetwork isMobile={true}/>
            </div>
            <div>
                <div className="mobile-exp">Опыт</div>
                <div className={style.jobsList}>
                    {/*<a href='https://portfolio.ln-kr.ru/data/docs/resume.pdf' target="_blank">*/}
                    {/*    <div className={style.viewFullResume}>*/}
                    {/*        <p>Полное резюме</p>*/}
                    {/*        <img src={next} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</a>*/}
                    {[...jobs.list]
                        .sort((a, b) => a.order - b.order)
                        .map((job, index) => {
                            return <Job key={index} job={job}/>
                        })}
                </div>
            </div>
            <div>
                <div className="mobile-projects">Проекты</div>
                <div className={style.projectsList}>
                    <Link to="/projectList">
                        <div className={style.viewFullResume}>
                            <p>Полный список проектов</p>
                            <img src={next} alt=""/>
                        </div>
                    </Link>
                    {projects.list.map((project, index) => {
                        if (!project.active) {
                            return;
                        }
                        return <Project key={index} project={project}/>
                    })}
                </div>
            </div>
        </main>);
}

export default Main;