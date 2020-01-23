import {connect} from 'react-redux';
import App from './App';
import { fetchThemes, fetchDefaultTheme } from '../actions/themes_actions';
import { fetchSamples } from '../actions/sample_actions';
import { fetchSequences, setCurrentSequence } from '../actions/sequence_actions';
import { fetchTheme } from '../actions/themes_actions';


const msp = (state) => {
    const currentThemeId = state.session.currentTheme;
    const currentTheme = state.entities.themes[currentThemeId];
    const currentSamples = currentTheme ? currentTheme.samples.map(sampleId => state.entities.samples[sampleId]) : null;
    const currentSequenceId = state.session.currentSequence;
    const currentSequence = state.entities.sequences[currentSequenceId];

    const allThemes = state.entities.themes;
    const allSamples= state.entities.samples;
    const allSequences = state.entities.sequences;

    return  {
        currentTheme: currentTheme,
        currentSamples: currentSamples,
        currentSequence: currentSequence,

        allThemes: allThemes,
        allSamples: allSamples,
        allSequences: allSequences
    };
};

const mdp = dispatch => {
    return {
        fetchThemes: () => dispatch(fetchThemes()),
        fetchDefaultTheme: () => dispatch(fetchDefaultTheme()),
        fetchSamples: () => dispatch(fetchSamples()),
        fetchSequences: () => dispatch(fetchSequences()),
        setCurrentSequence: (seqId) => dispatch(setCurrentSequence(seqId)),
        chooseTheme: themeId => dispatch(fetchTheme(themeId))
    };
};

export default connect(msp, mdp)(App);