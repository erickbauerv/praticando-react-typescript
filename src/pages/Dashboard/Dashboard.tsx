import { useCallback, useState } from "react";

export const Dashboard = () => {
    // useState de uma lista
    const [list, setList] = useState<string[]>(["teste1", "teste2", "teste3"]);

    // const que recebe um evento do mesmo tipo do onKeyDown
    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // Se a tecla no input for enter
        if(e.key === 'Enter'){
            // Se o tamanho do valor atual no evento for 0 ou for espaços não retorna nada
            if(e.currentTarget.value.trim().length === 0) return;

            // Guarda o valor atual no evento em uma const
            const value = e.currentTarget.value
            
            // Define o valor atual do evento como vazio
            e.currentTarget.value = ""
            
            // setList da list atual
            setList((oldList) => {
                // Se a lista antiga já possuir o a const value retorna ela mesma
                if(oldList.includes(value)) return oldList;
                // Retorna uma nova lista com os valores da lista anterior, e o valor atual no evento
                return [...oldList, value];
            })
        }
    }, []);

    return(
        <div>
            <p>Lista</p>
            {/* Quando qualquer tecla for pressionada no input chama o useCallback do handleInputKeyDown*/}
            <input onKeyDown={handleInputKeyDown} />
            <ul>
                {/* list.map funciona como foreach para a list no useState */}
                {list.map((value: string) => {
                    return <li key={value}>{value}</li>
                })}
            </ul>
        </div>
    )
}