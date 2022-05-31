import { useCallback, useState } from "react";

interface ITarefa{
    id: number
    title: string;
    isCompleted: boolean;
}

export const Dashboard = () => {
    // useState de uma lista de objetos
    const [list, setList] = useState<ITarefa[]>([]);

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
                // Se algum item da lista antiga já possuir a const value retorna ela mesma
                if(oldList.some((listItem) => listItem.title === value)) return oldList;
                // Retorna uma nova lista com os valores da lista anterior, e o valor atual no evento
                return [...oldList, {title: value, isCompleted: false, id: oldList.length}];
            })
        }
    }, []);

    return(
        <div>
            <p>Lista</p>
            {/* Quando qualquer tecla for pressionada no input chama o useCallback do handleInputKeyDown*/}
            <input onKeyDown={handleInputKeyDown} />

            <p>{list.filter((listItem) => listItem.isCompleted).length}</p>

            <ul>
                {/* list.map funciona como foreach para a list no useState */}
                {list.map((listItem: ITarefa) => {
                    return <li key={listItem.id}>
                        <input 
                            type="checkbox"
                            checked={listItem.isCompleted}
                            onChange={() => {
                                setList(oldList => {
                                    return oldList.map(oldListItem => {
                                        const newIsSelected = oldListItem.title === listItem.title
                                            ? !oldListItem.isCompleted
                                            : oldListItem.isCompleted
                                        
                                        return{
                                            ...oldListItem,
                                            isCompleted: newIsSelected,
                                        }
                                    })
                                })
                            }} 
                        />
                        {listItem.title}
                    </li>
                })}
            </ul>
        </div>
    )
}