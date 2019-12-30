import * as SamplesApiUtil from '../util/samples_api_util';

export const RECEIVE_SAMPLES = 'RECEIVE_SAMPLES';

export const receiveSamples = samples => ({
    type: RECEIVE_SAMPLES,
    samples
})

export const fetchSamples = () => dispatch => {
    return SamplesApiUtil.fetchSamples().then(
        (samples) => dispatch(receiveSamples(samples)),
        (errors) => dispatch(receiveErrors(errors))
    )
}