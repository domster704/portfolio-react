import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [{
        date: "сентябрь 2021 — декабрь 2023",
        position: "Android-developer",
        subPosition: ["Middle Engineer"],
        companyName: "Янтарь+",
        companyURL: "https://amberizh.ru/",
        about: "Разработка мобильного сервиса по оформлению заказов для торговых представителей, просмотру своей статистики и задолженности. " +
            "<br> Улучшил интерфейс программы, ускорил работу алгоритмов более чем в 2.5 раза, оптимизировал SQL-запросы",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"]
    }, {
        date: "июнь — июль 2023",
        position: "Full-stack developer",
        subPosition: ["Junior Engineer"],
        companyName: "ПРОНЕТКОМ",
        companyURL: "https://pronetcom.ru/",
        about: "Поддержка уществующего проекта, code-reviewing, написание SQL-запросов, мобильная разработка.<br> Ускорил многие SQL-запросы в среднем на 40%.",
        skills: ["JavaScript", "HTML", "CSS", "Cordova", "SVN", "PostgreSQL", "Node.js", "RESTful", "SFA системы"]
    }, {
        date: "октябрь 2023 — май 2024",
        position: "Front-end developer",
        subPosition: ["Web-разработчик", "Контент-менеджер"],
        companyName: "Dial Digital Agency",
        companyURL: "https://dialweb.ru/",
        about: "Верстка, разработка сайтов под CMS Битрикс.<br> Выполнение работ на существующих сайтах",
        skills: ["JavaScript", "HTML5", "CSS3", "CMS", "Bitrix CMS", "Figma", "PHP", "Bitrix24", "Flexbox", "БЭМ"]
    }, {
        date: "апрель 2024 — август 2024",
        position: "Full-stack developer",
        subPosition: ["Web-разработчик"],
        companyName: "ТОО \"Асмас\"",
        companyURL: "https://asmas.kz/",
        about: "Разработка и создание веб-сайтов, мобильные приложений, а также техническая поддержка и обслуживание информационных систем",
        skills: ["React.JS", "PostgreSQL", "JavaScript", "Linux", "Nginx", "Figma", "HTML5", "CSS3", "Flexbox"]
    }, {
        date: "август 2024 — сейчас",
        position: "DevOps developer",
        subPosition: ["FullStack-разработчик", "DevOps-разработчик"],
        companyName: "Novikov TV",
        companyURL: "https://novikovtv.tv/",
        about: "Программирование баз данных и управление, настройка API для интеграции с внешними системами, отладка, написание модульных и интеграционных тестов",
        skills: ["Linux", "Docker", "TypeScript", "SQL", "PostgreSQL", "NodeJS", "React.JS", "BalenaOS", "OpenBalena"]
    }].reverse()
};

const jobSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
});

export default jobSlice.reducer;