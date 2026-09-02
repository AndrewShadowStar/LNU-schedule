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
        mapUrl: "https://maps.google.com/maps?q=Економічний%20факультет%20ЛНУ%20ім.%20Івана%20Франка,%20Львів&t=&z=16&ie=UTF8&iwloc=&output=embed",
        photo: "Економічний факультет Львівського національного університету імені Івана Франка.webp"
    },
    "chornovola": {
        address: "Університет банківської справи, Чорновола 61",
        mapUrl: "https://maps.google.com/maps?q=Львівський%20інститут%20банківської%20справи,%20Чорновола%2061,%20Львів&t=&z=16&ie=UTF8&iwloc=&output=embed",
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
