export function RepositoryItem(props) {
    //react coloca todas as propriedades que eu criar dentro desse argumento chamado props
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url} target="_blank">Acessar repositórios</a>
        </li>
    );
}
//?? funciona como o ||, mas desconsidera o 0 é um valor inválido. normalmente é usada para expressar um valor padrão.
//Um ? depois de repository faz a verificação se aquela propriedade esta sendo aplicada para aquele elemento.