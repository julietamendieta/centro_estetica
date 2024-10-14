const treatments = [
    {   
        id: 'micro',
        name: 'Microdermoabrasión',
        image1: './images/microdermo.png',
        image2: './images/microdermo2.png',
        image3: './images/microdermo3.png',
        description: 'La microdermoabrasión es una técnica que se realiza para tener una piel más joven, suave y limpia. Con este procedimiento se consigue que la piel se renueve naturalmente, ayudando a eliminar cicatrices y a disminuir arrugas. La microdermoabrasión es un procedimiento estético no invasivo que elimina las capas más superficiales de la piel. Es similar al peeling pero menos agresivo. Con ello se consigue disminuir las líneas de expresión y las arrugas finas, mejorar las estrías, reducir la hiperpigmentación y la ampliación de poros, reducir signos de la edad y del sol, y aumentar la circulación para lograr una piel más sana. El tratamiento consiste en promover la regeneración celular, incrementar la producción de colágeno y la elasticidad. Para ello, se realiza un barrido sobre la capa externa de la epidermis y se pule la piel con minúsculas puntas de diamante o aluminio con las que se eliminan las imperfecciones, las arrugas y las manchas generadas en los últimos meses. En este sentido, se consigue mejorar la consistencia de la piel, darle una tonalidad más clara y rosada y un tacto más suave. Normalmente el tratamiento dura entre 35 y 40 minutos.'
    },
    {   
        id: 'facial',
        name: 'Facial con masajes',
        image1: './images/facial1.png',
        image2: './images/facial3.png',
        image3: './images/facial4.png',
        description: 'El facial con masajes incluye una limpieza de cutis profunda, con mascarillas y productos adaptados a tu tipo de piel y las necesidades de la misma. El masaje facial relaja los músculos de la cara, mejora la circulación de la zona, reduce las líneas de expresión, tonifica los músculos y alivia la tensión, lo que contribuye a un aspecto rejuvenecido y fresco. Al mismo tiempo, al estimular el sistema circulatorio el masaje consigue que los nutrientes y el oxígeno se transportan mejor por toda la piel, lo que contribuye a que el rostro se vea más sano, brillante y terso.'
    },
    {   
        id: 'rff',
        name: 'Radiofrecuencia facial',
        image1: './images/rffacial.png',
        image2: './images/rffacial2.png',
        image3: './images/rffacial4.png',
        description: 'La radiofrecuencia consiste en la aplicación de ondas electromagnéticas de alta frecuencia sobre la piel que provoca el calentamiento controlado de las diferentes capas de la dermis, lo que favorece la formación de nuevo colágeno, el drenaje linfático, la circulación de la piel y el tejido subcutáneo y la migración de fibroblastos. En función de la frecuencia que se utilice se pueden calentar diferentes capas de la dermis. Es un procedimiento indoloro y que se utiliza para el tratamiento de la celulitis y la flacidez de la piel en cualquier parte del cuerpo. El efecto inmediato de la aplicación de radiofrecuencia es la retracción del colágeno, para, tras sesiones sucesivas, lograr la reestructuración del colágeno profundo y la formación de nuevas fibras que sustituyan a las ya envejecidas, proporcionando una mayor elasticidad a los tejidos y obtener una piel más tersa y, como consecuencia, la reducción de las arrugas y flacidez epitelial. Los efectos se logran habitualmente a partir del mes de tratamiento y mejoran en los siguientes, aunque esto dependerá del estado del colágeno de cada persona. Se necesitan entre cuatro y diez sesiones, en función de la superficie corporal a tratar y pueden realizarse otras de recuerdo pasados unos meses.'
    },
    {   
        id: 'crio',
        name: 'Criolipolisis',
        image1: './images/crioterapia.png',
        image2: './images/crioterapia2.png',
        image3: './images/crioterapia3.png',
        description: 'La Criolipólisis es una técnica que reduce la grasa mediante el enfriamiento intenso controlado de la zona a tratar. Se desarrolla mediante la aplicación superficial de cabezales que succionan la zona como una ventosa para cristalizar en su interior los depósitos de grasa. Gracias a la cuidada elaboración de los cabezales, este tratamiento no suele dañar la piel a excepción de algún hematoma producido por el efecto ventosa, que no siempre ocurre. Además, entre el cabezal y la piel se colocan unas gasas gelatinosas preparadas por el mismo fabricante que minimizan notablemente cualquier daño dérmico. Esta máquina se centra en el tratamiento del adipocito y todo su contenido graso con una seguridad y eficacia notables. Los resultados son significantes en una única sesión, pasados un mes o dos. Este eficaz sistema de Criolipólisis consigue eliminar la grasa más resistente, dañando su composición celular.'
    },
    {   
        id: 'electro',
        name: 'Electroestimulación',
        image1: './images/electroestimulacion.png',
        image2: './images/electroestimulacion2.png',
        image3: './images/electroestimulacion3.png',
        description: 'Se trata del uso de aparatos que, mediante impulsos eléctricos, provocan contracciones musculares y, como consecuencia, un efecto similar al que se obtendría ejercitando los músculos. Provoca una mayor activación muscular y contracción de las fibras. En estos casos se llegan a reclutar fibras que serían imposibles alcanzar con contracciones voluntarias. Se produce una mejoría de la fuerza y la resistencia, mejora la capilarización, ofrece una elevación de la circulación sanguínea, así como del riego linfático y puede ayudarte en la recuperación tras una sesión de entrenamiento, y en la mejora de ciertas lesiones.'
    },
    {   
        id: 'masaje',
        name: 'Masaje corporal',
        image1: './images/masaje1.png',
        image2: './images/masaje2.png',
        image3: './images/masaje3.png',
        description: 'El Masaje corporal total es una de las mejores maneras de relajarse. Los movimientos lentos y la delicadeza del tacto pueden inducir al cuerpo a un estado de relajación profunda Y alejar la mente de los pensamientos negativos: lo que se necesita para eliminar el estrés de la vida cotidiana.'
    },
    {   
        id: 'rfc',
        name: 'Radiofrecuencia corporal',
        image1: './images/rfcorporal.png',
        image2: './images/rfcorporal2.png',
        image3: './images/rfcorporal3.png',
        description: 'La radiofrecuencia consiste en la aplicación de ondas electromagnéticas de alta frecuencia sobre la piel que provoca el calentamiento controlado de las diferentes capas de la dermis, lo que favorece la formación de nuevo colágeno, el drenaje linfático, la circulación de la piel y el tejido subcutáneo y la migración de fibroblastos. En función de la frecuencia que se utilice se pueden calentar diferentes capas de la dermis. Es un procedimiento indoloro y que se utiliza para el tratamiento de la celulitis y la flacidez de la piel en cualquier parte del cuerpo. El efecto inmediato de la aplicación de radiofrecuencia es la retracción del colágeno, para, tras sesiones sucesivas, lograr la reestructuración del colágeno profundo y la formación de nuevas fibras que sustituyan a las ya envejecidas, proporcionando una mayor elasticidad a los tejidos y obtener una piel más tersa y, como consecuencia, la reducción de las arrugas y flacidez epitelial. Los efectos se logran habitualmente a partir del mes de tratamiento y mejoran en los siguientes, aunque esto dependerá del estado del colágeno de cada persona. Se necesitan entre cuatro y diez sesiones, en función de la superficie corporal a tratar y pueden realizarse otras de recuerdo pasados unos meses.'
    },
    {   
        id: 'ultra',
        name: 'Ultracavitación',
        image1: './images/ultracavitacion.png',
        image2: './images/ultracavitacion2.png',
        image3: './images/ultracavitacion3.png',
        description: 'La ultracavitación es una técnica reductora cuya principal finalidad es eliminar los depósitos de grasa acumulados en el cuerpo de una manera no invasiva, es decir, sin recurrir a cirugía. Las zonas tratadas con ultracavitación son los muslos, las caderas, los brazos y el abdomen.'
    }
]

let treatmentButtons = document.querySelectorAll(".treatment-button")
let treatmentTitle = document.querySelector("#treatment-title")
let treatmentDescription = document.querySelector("#treatment-description")
let treatmentDetail = document.querySelectorAll('.treatment-detail')
let treatmentImgs = document.querySelector("#treatment-imgs")


treatmentButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        treatmentButtons.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active")
        const treatmentType = treatments.find(treatment => treatment.id === e.currentTarget.id);
        treatmentTitle.innerHTML = treatmentType.name;
        treatmentDescription.innerHTML = treatmentType.description;
        treatments.forEach(treatment => {
            const treatmentType = treatments.find(treatment => treatment.id === e.currentTarget.id);
            treatmentImgs.innerHTML = `
            <img class="treatment-img" src="${treatmentType.image1}">
            <img class="treatment-img" src="${treatmentType.image2}">
            <img class="treatment-img" src="${treatmentType.image3}">
            `
        })
    })
})
