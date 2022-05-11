import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Mario-Cesar-Yzarck/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
                
            </ul>
        </section>
    );
}

//useEffect() tem dois parametros, o primeiro é um função que será executada sempre que o segundo parametro for alterado. No segundo parametro (chamado de dependencia) coloca-se (não sei se é sempre) um [], se estiver vazio vai executar a função 1 vez apenas. Se não passar o segundo o useEffect entra em loop, assim como se a variavel dele for alterada na função.