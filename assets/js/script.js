const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
]

let rooms =0
let desde =0
let hasta =0
let contador=0
const propiedadesSection = document.querySelector(".propiedades")
const btn = document.getElementById("search")
const btn2= document.getElementById("clean")

function buscar(){
  for (let propiedad of propiedadesJSON){
  if (propiedad.rooms >= rooms && propiedad.m >= desde && propiedad.m <= hasta){
    const template = `
    <div class="propiedad">
    <img class="img" src="${propiedad.src}">
    <h4>${propiedad.name}</h4>
    <div class="datos">
    <p>Cuartos: ${propiedad.rooms}</p><p>Metros: ${propiedad.m}</p></div>
    <p>${propiedad.description}</p>
    <button class="btn btn-info">Ver más</button>
    <p></p>
    </div>
    `
    propiedadesSection.innerHTML += template
    contador +=1
  }
  }
}

function total(val){
  const cantidad = document.getElementById("cantidad")
    cantidad.textContent=val
  }

btn.addEventListener("click", function(){
let datos =document.getElementsByClassName("form-control")
let flag=true
for (let i = 0; i < datos.length; i++) {
  if (datos[i].value === ""){
    flag=false
  }
}
if (flag){
rooms=datos[0].value
desde=datos[1].value
hasta=datos[2].value
buscar()
total(contador)
}
else{
  alert("Faltan campos por llenar")
}
})

btn2.addEventListener("click", function(){
document.getElementsByTagName("input")[0].value=""
document.getElementsByTagName("input")[1].value=""
document.getElementsByTagName("input")[2].value=""
propiedadesSection.innerHTML=""
contador=0
cantidad.textContent=0
})






