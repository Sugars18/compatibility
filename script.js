function calculateCompatibility() {
    const name1 = document.getElementById("name1").value;
    const age1 = parseInt(document.getElementById("age1").value);
    const gender1 = document.getElementById("gender1").value;
    
    const name2 = document.getElementById("name2").value;
    const age2 = parseInt(document.getElementById("age2").value);
    const gender2 = document.getElementById("gender2").value;
    
    if (!name1 || !name2 || isNaN(age1) || isNaN(age2)) {
        alert("Заполните все поля!");
        return;
    }
    

    let compatibility = Math.floor(Math.random() * 50) + 50;  
    

    if (Math.abs(age1 - age2) > 10) {
        compatibility -= 15;
    }
    
    if (gender1 === gender2) {
        compatibility += 5;  
    } else {
        compatibility += 10; 
    }
    
    compatibility = Math.max(0, Math.min(100, compatibility)); 
    

    document.getElementById("compatibility-text").textContent = 
        `${name1} и ${name2} совместимы на ${compatibility}%!`;
    
    document.getElementById("compatibility-fill").style.width = `${compatibility}%`;
    

    const comments = [
        "Вау! Вы как Ромео и Джульетта, только без трагического конца!",
        "Неплохо! Хотя если он(а) не моет посуду, стоит задуматься...",
        "Могло быть и хуже. Например, 0%.",
        "Говорят, любовь слепа. Но ${compatibility}% — это уже кое-что!",
        "Почти идеально! Осталось только научиться терпеть его(её) храп.",
        "Совместимость на ${compatibility}%? Похоже, кто-то сегодня везунчик!",
        "Если верить статистике, у вас есть шанс! (Но статистика иногда врёт.)"
    ];
    
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    document.getElementById("funny-comment").textContent = randomComment;
    
    document.getElementById("result").classList.remove("hidden");
}