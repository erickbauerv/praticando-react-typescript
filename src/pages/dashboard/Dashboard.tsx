import { FerramentasDeListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"

export const Dashboard = () => {
    return(
        // Recebe o component BarraDeFerramentas como atributo
        <LayoutBaseDePagina 
            titulo="Página inicial" 
            barraDeFerramentas={(<FerramentasDeListagem mostrarInputDeBusca children={undefined}/>)}> 
            
        </LayoutBaseDePagina>
    )
}