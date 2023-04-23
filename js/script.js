const header= document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 90)
});

function mudarconteudo(){
    document.getElementById("conteudo").innerHTML = "Habilidades Full-Stack"
    document.getElementById("conteudo2").innerHTML = "habilidades em Html, Css, Javascript e Angular no Front-end, e Java e Python no Back-end."

}
function mudarconteudo2(){
    document.getElementById("conteudo").innerHTML = "Android"
    document.getElementById("conteudo2").innerHTML = "Habilidades com Java e Kotlin no android studio."

}
function mudarconteudo3(){
    document.getElementById("conteudo").innerHTML = "Ciencia de Dados"
    document.getElementById("conteudo2").innerHTML = "Analise de dados com Python. Algoritimos, estatisticas e Machine Learning."
}