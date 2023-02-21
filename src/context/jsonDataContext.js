import { createContext } from "react";

const jsonDataContext = createContext();
export const JsonDataProvider = jsonDataContext.Provider;
export default jsonDataContext;
