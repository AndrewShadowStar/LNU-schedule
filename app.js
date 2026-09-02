document.addEventListener("DOMContentLoaded", () => {
    // === ЛОГІКА ТЕМНОЇ ТЕМИ ===
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    
    if (themeToggle) {
        themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
        themeToggle.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            if (theme === "dark") {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            }
        });
    }

    // === БАЗОВІ ЗМІННІ ДЛЯ РОЗРАХУНКУ ЧАСУ ===
    const today = new Date();
    const currentMinutes = today.getHours() * 60 + today.getMinutes();
    const daysMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayName = daysMap[today.getDay()];

    const startDate = new Date('2026-09-01'); 
    const diffDays = Math.floor(Math.abs(today - startDate) / (1000 * 60 * 60 * 24));
    const weekNumber = Math.floor(diffDays / 7) + 1;
    const isNumerator = weekNumber % 2 !== 0;
    
    // БЕЗПЕЧНА ПЕРЕВІРКА: чи існує база даних. Якщо ні - сайт не зламається!
    let currentScheduleData = null;
    if (typeof scheduleNumerator !== 'undefined' && typeof scheduleDenominator !== 'undefined') {
        currentScheduleData = isNumerator ? scheduleNumerator : scheduleDenominator;
    }

    // === ЛОГІКА ГОЛОВНОЇ СТОРІНКИ ===
    const weekTypeEl = document.getElementById("week-type");
    if (weekTypeEl) {
        weekTypeEl.textContent = isNumerator ? "ЧИСЕЛЬНИК" : "ЗНАМЕННИК";

        const currentDay = today.getDay(); 
        const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay; 
        const monday = new Date(today);
        monday.setDate(today.getDate() + distanceToMonday);
        const thursday = new Date(monday);
        thursday.setDate(monday.getDate() + 3);

        const format = (date) => `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        document.getElementById("week-dates").textContent = `Дата ${format(monday)}-${format(thursday)}`;

        // Підсвічування поточного дня
        const todayBtn = document.querySelector(`.day-btn[href="day.html?day=${todayName}"]`);
        if (todayBtn) todayBtn.classList.add("active-day");

        // Віджет наступної/поточної пари
        const widgetEl = document.getElementById("next-class-widget");
        if (widgetEl && currentScheduleData && currentScheduleData[todayName]) {
            const todayClasses = currentScheduleData[todayName].classes;
            let activeClass = null;
            
            for (let cls of todayClasses) {
                const [startStr, endStr] = cls.time.split('-');
                const startMins = parseInt(startStr.split(':')[0]) * 60 + parseInt(startStr.split(':')[1]);
                const endMins = parseInt(endStr.split(':')[0]) * 60 + parseInt(endStr.split(':')[1]);
                
                if (currentMinutes <= endMins) {
                    activeClass = { ...cls, isNow: currentMinutes >= startMins };
                    break;
                }
            }

            if (activeClass) {
                widgetEl.style.display = "block";
                let roomNumber = activeClass.room.replace('ауд.', '').trim();
                let displayRoom = activeClass.locId === 'chornovola' ? `Ч${roomNumber}` : `${roomNumber}`;
                widgetEl.innerHTML = `<strong>${activeClass.isNow ? '🔴 Зараз' : '⏳ Наступна'}:</strong> ${activeClass.time} — ${activeClass.name} (ауд. ${displayRoom})`;
            }
        }
    }

    // === ЛОГІКА СТОРІНКИ ДНЯ ===
    const scheduleListEl = document.getElementById("schedule-list");
    if (scheduleListEl) {
        const urlParams = new URLSearchParams(window.location.search);
        const dayParam = urlParams.get('day');
        
        if (currentScheduleData && currentScheduleData[dayParam]) {
            const dayData = currentScheduleData[dayParam];
            document.getElementById("day-title").textContent = dayData.title;
            document.getElementById("day-date").textContent = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;

            dayData.classes.forEach(cls => {
                const classCard = document.createElement("div");
                const [startStr, endStr] = cls.time.split('-');
                const startMins = parseInt(startStr.split(':')[0]) * 60 + parseInt(startStr.split(':')[1]);
                const endMins = parseInt(endStr.split(':')[0]) * 60 + parseInt(endStr.split(':')[1]);
                
                const isNow = (dayParam === todayName && currentMinutes >= startMins && currentMinutes <= endMins);
                
                classCard.className = `class-card bg-${cls.type} ${isNow ? 'current-class' : ''}`;
                
                let roomNumber = cls.room.replace('ауд.', '').trim();
                let displayRoom = cls.locId === 'chornovola' ? `ауд. Ч${roomNumber}` : `ауд. ${roomNumber}`;
                
                classCard.innerHTML = `
                    <div class="class-time">
                        <span>${cls.number}</span>
                        <span>${cls.time}</span>
                    </div>
                    <div class="class-info">
                        ${cls.name},<br>
                        ${cls.teacher}, ${cls.type === 'lab' ? 'лаб.' : cls.type === 'lec' ? 'лек.' : 'сем.'}, 
                        <a href="geo.html?loc=${cls.locId}" class="class-link">${displayRoom}</a>
                    </div>
                    <a href="info.html?id=${cls.infoId}" class="info-btn">▶</a>
                `;
                scheduleListEl.appendChild(classCard);
            });
        } else {
            scheduleListEl.innerHTML = "<p>На цей день пар немає.</p>";
        }
    }

    // === ЛОГІКА СТОРІНКИ ГЕОЛОКАЦІЇ ТА ІНФО ===
    const geoAddressEl = document.getElementById("geo-address");
    if (geoAddressEl && typeof locations !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const locParam = urlParams.get('loc');
        const locData = locations[locParam];

        if (locData) {
            geoAddressEl.textContent = locData.address;
            document.getElementById("geo-map").innerHTML = `<iframe src="${locData.mapUrl}" allowfullscreen="" loading="lazy"></iframe>`;
            document.getElementById("geo-photo").src = locData.photo;
        }
    }

    const subjectNameEl = document.getElementById("subject-name");
    if (subjectNameEl && typeof teachersInfo !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get('id');
        const infoData = teachersInfo[idParam];

        if (infoData) {
            subjectNameEl.textContent = infoData.name;
            document.getElementById("subject-type").textContent = infoData.type;
            document.getElementById("teacher-name").textContent = infoData.teacherName;
            document.getElementById("teacher-photo").src = infoData.photo;
        }
    }
});
