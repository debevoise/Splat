export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_LOADING = 'SET_LOADING';

export const openModal = modal => ({
  type: OPEN_MODAL,
  modal
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});