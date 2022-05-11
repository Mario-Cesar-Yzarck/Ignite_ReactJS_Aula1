import { useState } from 'react';

/*
conceito de imutabilidade: não se altera o valor de uma variável, cria-se uma nova com novo valor.
Ex: array = [1,2,3]
array.push(4) //jeito padrão que altera o valor inicial
novoArray = [...array, 4] //os ... copiam todos os elementos do array citado
*/

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}

/*
o useState no react faz com que o valor daquela variável seja observado pelo react, caso não use isso ele fica inalterado.
os [] após a declaração da const é o destruction e as duas palavras dentro dele servem como valor atual e alterado.
*/

/* Entendendo um pouco de typeScript

type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, email ${user.email} e adress ${user.address.city}`
}

showWelcomeMessage({
    name: 'Jon',
    email: 'oi@oi.com',
    address: {
        city: 'Ecops',
        state: 'ES',
    }
})
*/