import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa{
    id: number
    nome: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const {data} = await Api().get("http://leonardofronza-001-site1.dtempurl.com/api/atores");
        return data;
    } catch (error: any){
        return new ApiException(error.message || "Erro ao buscar os registros.")
    }
};

const deleteById = async (id: number): Promise<ITarefa[] | ApiException> => {
    try {
        const {data} = await Api().get(`http://localhost:3333/tarefas/${id}`);
        return data;
    } catch (error: any){
        return new ApiException(error.message || "Erro ao consultar o registro.")
    }
};

const create = async (dataToCreate: Omit<ITarefa, "id">): Promise<ITarefa[] | ApiException> => {
    try {
        const {data} = await Api().post<any>("http://localhost:3333/tarefas" , dataToCreate);
        return data;
    } catch (error: any){
        return new ApiException(error.message || "Erro ao criar o registro.")
    }
};

const updateById = async (id: string, dataToUpdate: ITarefa): Promise<ITarefa[] | ApiException> => {
    try {
        const {data} = await Api().put(`http://leonardofronza-001-site1.dtempurl.com/api/atores${id}`, dataToUpdate);
        return data;
    } catch (error: any){
        return new ApiException(error.message || "Erro ao atualizar o registro.")
    }
};

const getById = async (id: string): Promise<undefined | ApiException> => {
    try {
        await Api().get(`http://localhost:3333/tarefas/${id}`);
        return undefined;
    } catch (error: any){
        return new ApiException(error.message || "Erro ao apagar o registro.")
    }
};


export const TarefasService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};