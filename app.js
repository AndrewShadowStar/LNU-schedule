document.addEventListener("DOMContentLoaded", () => {
    // 1. Встановлюємо дату початку семестру
    const startDate = new Date('2026-09-01'); // Рік-Місяць-День
    const today = new Date();

    // 2. Визначаємо Чисельник (непарний) чи Знаменник (парний тиждень)
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weekNumber = Math.floor(diffDays / 7) + 1;
    
    const isNumerator = weekNumber % 2 !== 0;
    document.getElementById("week-type").textContent = isNumerator ? "ЧИСЕЛЬНИК" : "ЗНАМЕННИК";

    // 3. Вираховуємо дати понеділка і четверга поточного тижня
    const currentDay = today.getDay(); 
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay; // Коригування, якщо сьогодні неділя (0)
    
    const monday = new Date(today);
    monday.setDate(today.getDate() + distanceToMonday);
    
    const thursday = new Date(monday);
    thursday.setDate(monday.getDate() + 3);

    // Функція для форматування дати у вигляд ДД.ММ
    const format = (date) => {
        let d = date.getDate().toString().padStart(2, '0');
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${d}.${m}`;
    };

    document.getElementById("week-dates").textContent = `Дата ${format(monday)}-${format(thursday)}`;
});
