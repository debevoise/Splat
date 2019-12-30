import $ from 'jquery';

export const fetchSamples = () => {
    return $.ajax({
        url: '/api/samples/'
    })
}

