const form = document.querySelector(".form-camisas")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharFormulario() {
    form.style.left = "-350px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden";
}

document.querySelector('.form-camisas').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: params
        });

        const text = await response.text();
        console.log('Resposta do Apps Script:', text);

        if (response.ok && text.includes("OK")) {
            window.location.href = "../pagamento/";
        } else {
            alert("Erro ao enviar: " + text);
        }
    } catch (err) {
        alert("Erro de rede: " + err.message);
    }
});

