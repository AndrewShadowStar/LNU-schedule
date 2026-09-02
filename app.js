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
        // Отримуємо день з URL (наприклад, ?day=wednesday)
        const urlParams = new URLSearchParams(window.location.search);
        const dayParam = urlParams.get('day');
        
        // Знаходимо дані для цього дня
        const dayData = scheduleData[dayParam];

        if (dayData) {
            document.getElementById("day-title").textContent = dayData.title;
            // Для прикладу ставимо сьогоднішню дату
            const today = new Date();
            document.getElementById("day-date").textContent = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;

            // Генеруємо пари
            dayData.classes.forEach(cls => {
                const classCard = document.createElement("div");
                classCard.className = `class-card bg-${cls.type}`;
                
                classCard.innerHTML = `
                    <div class="class-time">
                        <span>${cls.number}</span>
                        <span>${cls.time}</span>
                    </div>
                    <div class="class-info">
                        ${cls.name},<br>
                        ${cls.teacher}, ${cls.type === 'lab' ? 'лаб.' : cls.type === 'lec' ? 'лек.' : 'сем.'}, 
                        <a href="geo.html?loc=${cls.locId}" class="class-link">${cls.room}</a>
                    </div>
                    <a href="info.html?id=${cls.infoId}" class="info-btn">&#9654;</a>
                `;
                scheduleListEl.appendChild(classCard);
            });
        } else {
            scheduleListEl.innerHTML = "<p>Немає пар на цей день або день не обрано.</p>";
        }
    }
});
