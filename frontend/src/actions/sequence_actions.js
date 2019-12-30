import * as SequencesApiUtil from '../util/sequences_api_util';

export const RECEIVE_SEQUENCE = 'RECEIVE_SEQUENCE';
export const RECEIVE_SEQUENCES = 'RECEIVE_SEQUENCES';
export const RECEIVE_SEQUENCE_ERRORS = 'RECEIVE_SEQUENCE_ERRORS';

const receiveSequence = sequence => ({
  type: RECEIVE_SEQUENCE,
  sequence
})

const receiveSequences = sequences => ({
  type: RECEIVE_SEQUENCES,
  sequences
})

const receiveErrors = errors => ({
  type: RECEIVE_SEQUENCE_ERRORS,
  errors
})

export const fetchSequence = (seqId) => dispatch => {
  return SequencesApiUtil.fetchSequence(seqId).then(
    (sequence) => dispatch(receiveSequence(sequence)),
    (errors) => dispatch(receiveErrors(errors))
  )
}

export const fetchSequences = () => dispatch => {
  return SequencesApiUtil.fetchSequences().then(
    (sequences) => dispatch(receiveSequences(sequences)),
    (errors) => dispatch(receiveErrors(errors))
  )
}