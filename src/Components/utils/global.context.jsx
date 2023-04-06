import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { useReducer } from "react";
import { themes } from "./themes";
import { componentThemes } from "./themes";
import { themeSwitchReducer } from "./themeSwitchReducer";
import { form } from "./themes";

const ContextGlobal = createContext()

const Context = ({ children }) => {
  
  const [datos, setDatos] = useState([]);
  const [favs, setFavs] = useState([]);
  const initialState = {theme: themes.light, isDark: false};
  const [state, dispatch] = useReducer(themeSwitchReducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  const stylesSwitch = state.isDark ? themes.dark : themes.light;
  const stylesComponentsSwitch = state.isDark ? componentThemes.dark : componentThemes.light;
  const formStyle = state.isDark ? form.dark : form.light;

  useEffect(()=> {
    localStorage.setItem('favs', JSON.stringify(favs))
  },[favs]);

  useEffect(()=>{
    const axiosData = async () => {
      let res = await axios(url)
      setDatos(res.data)
  }
  axiosData()
  }, [url])

  return (
    <ContextGlobal.Provider 
    value={{
      datos,
      state,
      dispatch,
      themes,
      stylesComponentsSwitch,
      stylesSwitch,
      formStyle,
      favs,
      setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default Context

export const useContextGlobal =() => {
  return useContext(ContextGlobal)
}