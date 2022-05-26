import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider, UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </AppThemeProvider>
    </UsuarioLogadoProvider>
  );
}