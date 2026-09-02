document.addEventListener("DOMContentLoaded", () => {
    // === ЛОГІКА ГОЛОВНОЇ СТОРІНКИ ===
    const weekTypeEl = document.getElementById("week-type");
    if (weekTypeEl) {
        const startDate = new Date('2026-09-01'); 
        const today = new Date();
        const diffDays = Math.floor(Math.abs(today - startDate) / (1000 * 60 * 60 * 24));
        const weekNumber = Math.floor(diffDays / 7) + 1;
        
        const isNumerator = weekNumber % 2 !== 0;
        weekTypeEl.textContent = isNumerator ? "ЧИСЕЛЬНИК" : "ЗНАМЕННИК";

        const currentDay = today.getDay(); 
        const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay; 
        const monday = new Date(today);
        monday.setDate(today.getDate() + distanceToMonday);
        const thursday = new Date(monday);
        thursday.setDate(monday.getDate() + 3);

        const format = (date) => `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        document.getElementById("week-dates").textContent = `Дата ${format(monday)}-${format(thursday)}`;
    }

    // === ЛОГІКА СТОРІНКИ ДНЯ ===
    const scheduleListEl = document.getElementById("schedule-list");
    if (scheduleListEl) {
        // 1. Рахуємо, який зараз тиждень (Чисельник чи Знаменник)
        const startDate = new Date('2026-09-01'); 
        const today = new Date();
        const diffDays = Math.floor(Math.abs(today - startDate) / (1000 * 60 * 60 * 24));
        const weekNumber = Math.floor(diffDays / 7) + 1;
        const isNumerator = weekNumber % 2 !== 0;

        // 2. Отримуємо день з URL
        const urlParams = new URLSearchParams(window.location.search);
        const dayParam = urlParams.get('day');
        
        // 3. Вибираємо правильний розклад залежно від тижня
        const currentScheduleData = isNumerator ? scheduleNumerator : scheduleDenominator;
        const dayData = currentScheduleData[dayParam];

        if (dayData) {
            document.getElementById("day-title").textContent = dayData.title;
            document.getElementById("day-date").textContent = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;

            dayData.classes.forEach(cls => {
                const classCard = document.createElement("div");
                classCard.className = `class-card bg-${cls.type}`;
                
                // Форматування номера аудиторії (додаємо "Ч" для Чорновола)
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
                    <a href="info.html?id=${cls.infoId}" class="info-btn">&#9654;</a>
                `;
                scheduleListEl.appendChild(classCard);
            });
        } else {
            scheduleListEl.innerHTML = "<p>На цей день пар немає.</p>";
        }
    }

    // === ЛОГІКА СТОРІНКИ ГЕОЛОКАЦІЇ ===
    const geoAddressEl = document.getElementById("geo-address");
    if (geoAddressEl) {
        const urlParams = new URLSearchParams(window.location.search);
        const locParam = urlParams.get('loc');
        const locData = locations[locParam];

        if (locData) {
            geoAddressEl.textContent = locData.address;
            document.getElementById("geo-map").innerHTML = `<iframe src="${locData.mapUrl}" allowfullscreen="" loading="lazy"></iframe>`;
            document.getElementById("geo-photo").src = locData.photo;
        } else {
            geoAddressEl.textContent = "Локацію не знайдено";
        }
    }

    // === ЛОГІКА СТОРІНКИ ІНФО (ВИКЛАДАЧІ) ===
    const subjectNameEl = document.getElementById("subject-name");
    if (subjectNameEl) {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get('id');
        const infoData = teachersInfo[idParam];

        if (infoData) {
            subjectNameEl.textContent = infoData.name;
            document.getElementById("subject-type").textContent = infoData.type;
            document.getElementById("teacher-name").textContent = infoData.teacherName;
            document.getElementById("teacher-photo").src = infoData.photo;
        } else {
            subjectNameEl.textContent = "Інформацію не знайдено";
        }
    }
});
