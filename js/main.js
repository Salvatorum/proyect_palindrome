const button = document.getElementById('check-btn');
const inputText = document.getElementById('text-input');
const pResult = document.getElementById('result');

// función de formato
function formatear (textoIngresado) {
    let regex = /[^a-zA-Z0-9]/g;
    let cadenaFormateada =  textoIngresado.replace(regex, '').toLowerCase();
    return cadenaFormateada;
};

/* // Otra versión del ispalindrome
función de verificación de palindromos 
function isPalindromo (textoFormateado) {
    let lista = [...textoFormateado]
    return lista.join('') === lista.reverse().join('');
};
*/
function isPalindromo(textoFormateado) {
    for (let i = 0; i < textoFormateado.length / 2; i++) {
        if (textoFormateado[i] !== textoFormateado[textoFormateado.length - 1 - i]) {
            return false;
        }
    }
    return true;
}



// validar entrada
button.addEventListener('click', () => {
    const textoIngresado = inputText.value;
    if (textoIngresado === "") {
        alert('Please input a value');
        return;    
    } else { }

    
    function textResult (resultado) {
        if (resultado === true) {
            pResult.innerHTML = `
             <span class="span_color">${textoIngresado}</span> is a palindrome.
            `;
        } else {
            pResult.innerHTML = `
             <span class="span_color">${textoIngresado}</span> is not a palindrome.
            `;
        }
    };
    
    
    // formatea y verifica si es palindromo, luego muestra el resultado.
    textResult(isPalindromo(formatear(textoIngresado)));


});
