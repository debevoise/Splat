import axios from 'axios';

export const fetchThemes = () => {
  return axios.get('/api/themes')
}

export const fetchTheme = themeId => {
  return axios.get(`/api/themes/${themeId}`)
}

export const fetchDefaultTheme = () => {
  return axios.get(`/api/themes/default`);
};