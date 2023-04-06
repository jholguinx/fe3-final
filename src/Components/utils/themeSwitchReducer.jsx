import { themes } from "./themes";
import { componentThemes } from "./themes";
import { form } from "./themes";

export const themeSwitchReducer = (state, action) => {
    switch(action.type) {
        case 'THEME_LIGHT':
            return {theme: themes.light, isDark: action.payload,  componentThemes: componentThemes.light}

        case 'THEME_DARK':
            return {theme: themes.dark, isDark: action.payload ,componentThemes: componentThemes.dark, form: form.dark}
        default: {
            throw new Error()
        }
    }
}