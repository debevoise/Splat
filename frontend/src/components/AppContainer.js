import {connect} from 'react-redux';
import App from './App';
import { fetchThemes, fetchDefaultTheme } from '../actions/themes_actions';
import { fetchSamples } from '../actions/sample_actions';

const msp = (state) => {
    const currentThemeId = state.session.currentTheme;
    const currentTheme = state.entities.themes[currentThemeId] || { samples: [] };
    const currentSamples = currentTheme.samples.map(sampleId => state.entities.samples[sampleId]);
    const allThemes = state.entities.themes;
    const allSamples= state.entities.samples;

    return  {
        currentTheme: currentTheme,
        currentSamples: currentSamples,
        allThemes: allThemes,
        allSamples: allSamples
    };
};

const mdp = dispatch => {
    return {
        fetchThemes: () => dispatch(fetchThemes()),
        fetchDefaultTheme: () => dispatch(fetchDefaultTheme()),
        fetchSamples: () => dispatch(fetchSamples())
    };
};

export default connect(msp, mdp)(App);