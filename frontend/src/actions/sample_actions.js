import * as SamplesApiUtil from '../util/samples_api_util';

export const RECEIVE_SAMPLES = 'RECEIVE_SAMPLES';
export const RECEIVE_SAMPLE_ERRORS = 'RECEIVE_SAMPLES_ERRORS';

export const receiveSamples = samples => ({
    type: RECEIVE_SAMPLES,
    samples
})

export const receiveErrors = errors => ({
    type: RECEIVE_SAMPLE_ERRORS,
    errors
})

export const fetchSamples = () => dispatch => {
    return SamplesApiUtil.fetchSamples().then(
        (samples) => dispatch(receiveSamples(samples)),
        (errors) => dispatch(receiveErrors(errors))
    )
}