const scheduleNumerator = {
    monday: {
        title: "ПОНЕДІЛОК",
        classes: [
            { number: "7", time: "18:10-19:30", name: "Інтелектуальні системи аналізу даних у менеджменті", teacher: "доц. Прийма С. С.", type: "lab", room: "ауд.307", infoId: "int-sys", locId: "chornovola" },
            { number: "8", time: "19:40-21:00", name: "Управління змінами", teacher: "доц. Грищук А. М.", type: "lec", room: "ауд.114", infoId: "upr-zmin", locId: "chornovola" }
        ]
    },
    tuesday: {
        title: "ВІВТОРОК",
        classes: [
            { number: "7", time: "18:10-19:30", name: "Цифрові системи управління бізнесом", teacher: "доц. Мельник Б. К.", type: "lec", room: "ауд.203", infoId: "cyf-sys", locId: "main" },
            { number: "8", time: "19:40-21:00", name: "Технології підтримки прийняття управлінських рішень", teacher: "доц. Мельник Б. К.", type: "lec", room: "ауд.203", infoId: "tech-pid", locId: "main" }
        ]
    },
    wednesday: {
        title: "СЕРЕДА",
        classes: [
            { number: "6", time: "16:40-18:00", name: "Цифрові системи управління бізнесом", teacher: "доц. Мельник Б. К.", type: "lab", room: "ауд.200", infoId: "cyf-sys", locId: "main" },
            { number: "7", time: "18:10-19:30", name: "Технології підтримки прийняття управлінських рішень", teacher: "доц. Мельник Б. К.", type: "lab", room: "ауд.200", infoId: "tech-pid", locId: "main" },
            { number: "8", time: "19:40-21:00", name: "Стратегічне управління людськими ресурсами", teacher: "проф. Приймак В. І.", type: "lec", room: "ауд.108", infoId: "strat-upr", locId: "main" }
        ]
    },
    thursday: {
        title: "ЧЕТВЕР",
        classes: [
            { number: "7", time: "18:10-19:30", name: "Інтелектуальні системи аналізу даних у менеджменті", teacher: "доц. Прийма С. С.", type: "lec", room: "ауд.203", infoId: "int-sys", locId: "main" },
            { number: "8", time: "19:40-21:00", name: "Проектний менеджмент", teacher: "доц. Ноздріна Л. В.", type: "lec", room: "ауд.203", infoId: "proj-men", locId: "main" }
        ]
    }
};

const scheduleDenominator = {
    monday: {
        title: "ПОНЕДІЛОК",
        classes: [
            { number: "7", time: "18:10-19:30", name: "Управління змінами", teacher: "доц. Грищук А. М.", type: "sem", room: "ауд.114", infoId: "upr-zmin", locId: "chornovola" },
            { number: "8", time: "19:40-21:00", name: "Управління змінами", teacher: "доц. Грищук А. М.", type: "lec", room: "ауд.114", infoId: "upr-zmin", locId: "chornovola" }
        ]
    },
    tuesday: {
        title: "ВІВТОРОК",
        classes: scheduleNumerator.tuesday.classes // Пари такі самі, як у чисельнику
    },
    wednesday: {
        title: "СЕРЕДА",
        classes: [
            { number: "7", time: "18:10-19:30", name: "Стратегічне управління людськими ресурсами", teacher: "проф. Приймак В. І.", type: "sem", room: "ауд.108", infoId: "strat-upr", locId: "main" },
            { number: "8", time: "19:40-21:00", name: "Стратегічне управління людськими ресурсами", teacher: "проф. Приймак В. І.", type: "lec", room: "ауд.108", infoId: "strat-upr", locId: "main" }
        ] // 6 пари немає
    },
    thursday: {
        title: "ЧЕТВЕР",
        classes: [
            { number: "6", time: "16:40-18:00", name: "Проектний менеджмент", teacher: "доц. Ноздріна Л. В.", type: "lab", room: "ауд.211", infoId: "proj-men", locId: "main" },
            { number: "7", time: "18:10-19:30", name: "Інтелектуальні системи аналізу даних у менеджменті", teacher: "доц. Прийма С. С.", type: "lec", room: "ауд.203", infoId: "int-sys", locId: "main" },
            { number: "8", time: "19:40-21:00", name: "Проектний менеджмент", teacher: "доц. Ноздріна Л. В.", type: "lec", room: "ауд.203", infoId: "proj-men", locId: "main" }
        ]
    }
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
