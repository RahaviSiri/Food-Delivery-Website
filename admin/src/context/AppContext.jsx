import { createContext } from "react";
import { url } from "../admin_assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendURL = url;

    const values = {
        backendURL,
    }
    return  (
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;