const txtArtista = document.getElementById("artista");
const txtCancion = document.getElementById("cancion");

const btn_buscar = document.getElementById("btn_buscar");
const lblSalida = document.getElementById("salida");
btn_buscar.addEventListener("click", function(e) {
    e.preventDefault();
    const artista = txtArtista.value
    const cancion = txtCancion.value
    consultarApi(artista, cancion);
});

function consultarApi(artista, cancion) {
    console.log(artista, cancion);
    const enlace = `https://api.lyrics.ovh/v1/ ${artista} / ${cancion}`;
    fetch(enlace)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            if (resultado.lyrics) {
                const { lyrics } = resultado;
                lblSalida.innerHTML = `
            <h2> ${cancion.toUpperCase()} de ${artista.toUpperCase()} </h2>
            <pre> ${lyrics}</pre>
           `;
            } else {
                lblSalida.innerHTML = "La cancion no exixte"

            }
        })
        .catch(error = console.log(error));
}