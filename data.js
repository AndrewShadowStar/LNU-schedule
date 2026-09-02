const scheduleData = {
    wednesday: {
        title: "СЕРЕДА",
        classes: [
            {
                number: "6",
                time: "16:40-18:00",
                name: "Цифрові системи управління бізнесом",
                teacher: "доц. Мельник Б. К.",
                type: "lab",
                room: "ауд.200",
                infoId: "cyf-sys",
                locId: "chornovola"
            },
            {
                number: "7",
                time: "18:10-19:30",
                name: "Технології підтримки прийняття управлінських рішень",
                teacher: "доц. Мельник Б. К.",
                type: "lab",
                room: "ауд.200",
                infoId: "tech-pid",
                locId: "chornovola"
            },
            {
                number: "8",
                time: "19:40-21:00",
                name: "Стратегічне управління людськими ресурсами",
                teacher: "проф. Приймак В. І.",
                type: "lec",
                room: "ауд.108",
                infoId: "strat-upr",
                locId: "main"
            }
        ]
    }
    // Сюди пізніше додамо monday, tuesday, thursday
};
const locations = {
    "main": {
        address: "Економічний факультет, пр. Свободи, 18",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.076540306385!2d24.0255!3d49.8415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUwJzI5LjQiTiAyNMKwMDEnMzEuOCJF!5e0!3m2!1suk!2sua!4v1690000000000",
        photo: "Економічний факультет Львівського національного університету імені Івана Франка.webp"
    },
    "chornovola": {
        address: "Університет банківської справи, Чорновола 61",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.645003666666!2d24.0210!3d49.8490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUwJzU2LjQiTiAyNMKwMDEnMTUuNiJF!5e0!3m2!1suk!2sua!4v1690000000000",
        photo: "Львівський інститут банківської справи.jpg"
    }
};

const teachersInfo = {
    "int-sys": {
        name: "Інтелектуальні системи аналізу даних у менеджменті",
        type: "Екзамен",
        teacherName: "Прийма Світлана Степанівна",
        photo: "Прийма Світлана Степанівна.jpg"
    },
    "upr-zmin": {
        name: "Управління змінами",
        type: "Екзамен",
        teacherName: "Грищук Анна Михайлівна",
        photo: "Грищук Анна Михайлівна.jpg"
    },
    "cyf-sys": {
        name: "Цифрові системи управління бізнесом",
        type: "Екзамен",
        teacherName: "Мельник Богдан Кирилович",
        photo: "Мельник Богдан Кирилович.jpg"
    },
    "tech-pid": {
        name: "Технології підтримки прийняття управлінських рішень",
        type: "Залік",
        teacherName: "Мельник Богдан Кирилович",
        photo: "Мельник Богдан Кирилович.jpg"
    },
    "strat-upr": {
        name: "Стратегічне управління людськими ресурсами",
        type: "Екзамен",
        teacherName: "Приймак Василь Іванович",
        photo: "Приймак Василь Іванович.jpg"
    },
    "proj-men": {
        name: "Проектний менеджмент",
        type: "Екзамен",
        teacherName: "Ноздріна Лариса Василівна",
        photo: "Ноздріна Лариса Василівна.jpg"
    }
};
