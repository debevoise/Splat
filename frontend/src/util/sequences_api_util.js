import axios from 'axios'

export const fetchSequence = (seqId) => {
  return axios.get(`/api/sequences/${seqId}`);
}

export const fetchSequences = () => {
  return axios.get('/api/sequences/');
}
