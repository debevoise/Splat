import axios from 'axios';

export const fetchSamples = () => {
    return axios.get('/api/samples')
}

export const fetchSample = sampleId => {
    return axios.get(`/api/samples/${sampleId}`)
}

