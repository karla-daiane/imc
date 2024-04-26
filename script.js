
function calcular(){

    // Pegar os dados do input
    const $altura = document.querySelector('#altura').value;
    const $peso = document.querySelector('#peso').value;
    const $resultadoImc = document.querySelector('.resultado-imc');
    const $imgImc = document.querySelector('.img-imc');
    
    // Msg de erro por falta de dados ou dados inválidos (Add Prompt)
    
    if (0 > $altura > 2.99 || 0 > $peso > 200){
        window.alert(`Valores inseridos inválidos`)
    } else {
        
    // Cálculo IMC
    const imc = ($peso / ($altura ** 2)).toFixed(2);

    // Mostrar resultado e classificação, e ocultar imagem
    $imgImc.style.display = 'none'; // Ocultar imagem IMC
    $resultadoImc.innerHTML = `<p>IMC: ${imc}</p>`

    if (imc <= 18.5){
        $resultadoImc.innerHTML += `<p> Baixo Peso </p>`
    } else if (imc >= 18.6 && imc <= 24.9){
        $resultadoImc.innerHTML += `<p> Peso Normal </p>`
    } else if(imc >= 25 && imc <= 29.9){
        $resultadoImc.innerHTML += `<p> Acima do Peso </p>`
    } else if(imc >= 30 && imc <= 34.9){
        $resultadoImc.innerHTML += `<p> Obesidade Grau I </p>`
    } else if(imc >= 35 && imc <= 39.9){
        $resultadoImc.innerHTML += `<p> Obesidade Grau II </p>`
    } else if(imc >= 40){
        $resultadoImc.innerHTML += `<p> Obesidade Grau III </p>`
    }

    $resultadoImc.innerHTML += `
                <p>Acesse nossos serviços e melhore sua qualidade de vida.</p> 
                <div>
                <a href="https://www.google.com/" rel="noopener" target="_blank" class="btn">SERVIÇOS</a>
                </div>
                `

    }

}