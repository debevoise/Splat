import * as SamplesApiUtil from '../util/samples_api_util';

export const RECEIVE_SAMPLES = 'RECEIVE_SAMPLES';
export const RECEIVE_SAMPLE = 'RECEIVE_SAMPLE';
export const RECEIVE_SAMPLE_ERRORS = 'RECEIVE_SAMPLE';

const receiveSamples = samples => ({
    type: RECEIVE_SAMPLES,
    samples
})

const receiveSample = sample => ({
    type: RECEIVE_SAMPLE,
    sample
})

const receiveErrors = errors => ({
    type: RECEIVE_SAMPLE_ERRORS,
    errors
})

export const fetchSample = () => dispatch => {
  return SamplesApiUtil.fetchSample().then(
    ({ data }) => dispatch(receiveSample(data)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const fetchSamples = () => dispatch => {
    return SamplesApiUtil.fetchSamples().then(
        ({ data }) => dispatch(receiveSamples(data)),
        (errors) => dispatch(receiveErrors(errors))
    )
}