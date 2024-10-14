const testimonies = [
    {
        name:"Carla",
        testimony:"La atención fue espectacular."
    },
    {
        name:"Julia",
        testimony:"Muy buena atención y el tratamiento dio resultado."
    },
    {
        name:"Marcos",
        testimony:"Realmente contento con los resultados y la atención."
    },
    {
        name:"Gabriel",
        testimony:"Recomiendo Mevak a cada persona que me pregunta."
    },
    {
        name:"Natalia",
        testimony:"Recomendado al 100%. Atención y tratamientos como en ningún otro lugar."
    },
    {
        name:"Nuria",
        testimony:"Excelente lugar, te hacen sentir cómoda y segura."
    },
    {
        name:"Luisa",
        testimony:"Una experiencia hermosa y relajante."
    },
    {
        name:"Florencia",
        testimony:"Mi tercera vez en Mevak, y no será la última."
    },
    {
        name:"Florencia",
        testimony:"Mi tercera vez en Mevak, y no será la última."
    },
    {
        name:"Florencia",
        testimony:"Mi tercera vez en Mevak, y no será la última."
    },
    {
        name:"Florencia",
        testimony:"Mi tercera vez en Mevak, y no será la última."
    }
]

let testimoniesBox = document.getElementById("testimonies-box")

for(const testimony of testimonies){
    testimoniesBox.innerHTML +=`
    <div class="testimoniesBox">
        <h3>${testimony.name}</h3>
        <img src="./images/stars.png">
        <p>${testimony.testimony}</p>
    </div>
    `
}

let leftBtn = document.getElementById('left-btn')
let rightBtn = document.getElementById('right-btn')

leftBtn.addEventListener('click', () => {
    testimoniesBox.scrollLeft -= 300
});

rightBtn.addEventListener('click', () => {
    testimoniesBox.scrollLeft += 300
})