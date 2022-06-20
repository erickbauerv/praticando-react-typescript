import { BarraDeFerramentas } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"

export const Dashboard = () => {
    return(
        // Recebe o component BarraDeFerramentas como atributo
        <LayoutBaseDePagina 
            titulo="Página inicial" 
            barraDeFerramentas={(<BarraDeFerramentas mostrarInputDeBusca children={undefined}/>)}> 
            
        </LayoutBaseDePagina>
    )
}