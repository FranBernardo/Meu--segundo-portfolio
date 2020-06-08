function digitar(elemento) {
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < texto.length; i++) {
      setTimeout(() => elemento.innerHTML += texto[i], 90 * i);
    }
 }
 const titulo = document.querySelector('h1 #titulo');
 console.log(titulo);
 digitar(titulo);
			
			
