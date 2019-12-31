import * as ThemesApiUtil from '../util/themes_api_util';

export const RECEIVE_THEMES = "RECEIVE_THEMES";
export const RECEIVE_THEME = "RECEIVE_THEME";

const receiveThemes = themes => {
  return {
    type: RECEIVE_THEMES,
    themes
  }
}

const receiveTheme = theme => {
  return {
    type: RECEIVE_THEME,
    theme
  }
}

export const fetchThemes = () => dispatch => {
  return ThemesApiUtil.fetchThemes()
    .then( ({ data }) => dispatch(receiveThemes(data)))
}

export const fetchTheme = themeId => dispatch => {
  return ThemesApiUtil.fetchTheme(themeId)
    .then( ({ data }) => dispatch(receiveTheme(data)))
}

export const fetchDefaultTheme = () => dispatch => {
  return ThemesApiUtil.fetchDefaultTheme()
    .then( ({ data }) => dispatch(receiveTheme(data)))
}