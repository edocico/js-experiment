console.log('hello world')

// recupero elementi del DOM

const okBtnDOMElement = document.getElementById('ok-btn')

const inputDOMElement = document.getElementById('n-input')

const cardF1DOMElement = document.querySelector('.card-front1')

const cardB1DOMElement = document.querySelector('.card-back1')

const cardF2DOMElement = document.querySelector('.card-front2')

const cardB2DOMElement = document.querySelector('.card-back2')

const cardF3DOMElement = document.querySelector('.card-front3')

const cardB3DOMElement = document.querySelector('.card-back3')

const col1DOMElement = document.querySelector('.col-1')

const col2DOMElement = document.querySelector('.col-2')

const col3DOMElement = document.querySelector('.col-3')

const p1DOMElement = document.querySelector('.frase-1')

const p2DOMElement = document.querySelector('.frase-2')

// INIZIO SCRIPT

// event listner bottone ok

okBtnDOMElement.addEventListener('click', function() {

    let userNumber = parseInt(inputDOMElement.value)
    //console.log(userNumber)
    // apro condizione per verificare che il valore inserito sia valido
    if (userNumber < 1 || userNumber > 3 || isNaN(userNumber)) {
        alert('il numero inserito non è valido! riprova inseriscine uno valido')
    } else {
        // faccio comparire il retro delle carte rimuovendo la parte frontale
        cardF1DOMElement.classList.add('d-none')
        cardF2DOMElement.classList.add('d-none')
        cardF3DOMElement.classList.add('d-none')
        cardB1DOMElement.classList.remove('d-none')
        cardB2DOMElement.classList.remove('d-none')
        cardB3DOMElement.classList.remove('d-none')
        cardB1DOMElement.classList.add('d-block')
        cardB2DOMElement.classList.add('d-block')
        cardB3DOMElement.classList.add('d-block')

        //genero un numero casuale da 1 a 6
        let genNumber = Math.floor(Math.random() * 6) + 1

        console.log(genNumber)
        // mescolo le carte in base al numero casuale generato
        if (genNumber === 1) {
            col1DOMElement.classList.add('order-1')
            col2DOMElement.classList.add('order-2')
            col3DOMElement.classList.add('order-3')
        } else if (genNumber === 2) {
            col1DOMElement.classList.add('order-2')
            col2DOMElement.classList.add('order-1')
            col3DOMElement.classList.add('order-3')
        } else if (genNumber === 3) {
            col1DOMElement.classList.add('order-3')
            col2DOMElement.classList.add('order-1')
            col3DOMElement.classList.add('order-2')
        } else if (genNumber === 4) {
            col1DOMElement.classList.add('order-1')
            col2DOMElement.classList.add('order-3')
            col3DOMElement.classList.add('order-2')
        } else if (genNumber === 5) {
            col1DOMElement.classList.add('order-2')
            col2DOMElement.classList.add('order-3')
            col3DOMElement.classList.add('order-1')
        } else if (genNumber === 6) {
            col1DOMElement.classList.add('order-3')
            col2DOMElement.classList.add('order-2')
            col3DOMElement.classList.add('order-1')
        }

        // ora faccio scomparire la prima frase e apparire la seconda

        p1DOMElement.classList.add('d-none')
        p2DOMElement.classList.remove('d-none')
        p2DOMElement.classList.add('d-block')

        //attendo che l'utente scriva il numero e ascolta per il tasto ok

        okBtnDOMElement.addEventListener('click', function() {

            //raccolgo il numero in input dell'utente

            let userNumber2 = parseInt(inputDOMElement.value)

            //apro la condizionale e faccio le verifiche

            if (userNumber2 < 1 || userNumber2 > 3 || isNaN(userNumber2)) {
                alert('il numero inserito non è valido! riprova inseriscine uno valido')
            } else if (userNumber === 1 && userNumber2 === 1 && (genNumber === 1 || genNumber === 2)) {
                cardB1DOMElement.classList.remove('d-block')
                cardB2DOMElement.classList.remove('d-block')
                cardB3DOMElement.classList.remove('d-block')
                cardB1DOMElement.classList.add('d-none')
                cardB2DOMElement.classList.add('d-none')
                cardB3DOMElement.classList.add('d-none')
                cardF1DOMElement.classList.remove('d-none')
                cardF2DOMElement.classList.remove('d-none')
                cardF3DOMElement.classList.remove('d-none')
                cardF1DOMElement.classList.add('d-block')
                cardF2DOMElement.classList.add('d-block')
                cardF3DOMElement.classList.add('d-block')
                alert('Complimenti hai vinto! ricarica la pagina per giocare ancora.')
            } else if (userNumber === 1 && userNumber2 === 2 && (genNumber === 2 || genNumber === 5)) {
                cardB1DOMElement.classList.remove('d-block')
                cardB2DOMElement.classList.remove('d-block')
                cardB3DOMElement.classList.remove('d-block')
                cardB1DOMElement.classList.add('d-none')
                cardB2DOMElement.classList.add('d-none')
                cardB3DOMElement.classList.add('d-none')
                cardF1DOMElement.classList.remove('d-none')
                cardF2DOMElement.classList.remove('d-none')
                cardF3DOMElement.classList.remove('d-none')
                cardF1DOMElement.classList.add('d-block')
                cardF2DOMElement.classList.add('d-block')
                cardF3DOMElement.classList.add('d-block')
                alert('Complimenti hai vinto! ricarica la pagina per giocare ancora.')
            } else if (userNumber === 1 && userNumber2 === 3 && (genNumber === 3 || genNumber === 6)) {
                cardB1DOMElement.classList.remove('d-block')
                cardB2DOMElement.classList.remove('d-block')
                cardB3DOMElement.classList.remove('d-block')
                cardB1DOMElement.classList.add('d-none')
                cardB2DOMElement.classList.add('d-none')
                cardB3DOMElement.classList.add('d-none')
                cardF1DOMElement.classList.remove('d-none')
                cardF2DOMElement.classList.remove('d-none')
                cardF3DOMElement.classList.remove('d-none')
                cardF1DOMElement.classList.add('d-block')
                cardF2DOMElement.classList.add('d-block')
                cardF3DOMElement.classList.add('d-block')
                alert('Complimenti hai vinto! ricarica la pagina per giocare ancora.')
            }
        })  

    }
})