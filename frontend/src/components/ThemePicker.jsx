import React from 'react';
import { connect } from 'react-redux';
import '../styles/ThemePicker.css';
import { fetchTheme } from '../actions/themes_actions';

const msp = state => ({
  currentThemeId: state.session.currentTheme,
  themes: Object.values(state.entities.themes || {})
});
const mdp = dispatch => ({
  chooseTheme: themeId => dispatch(fetchTheme(themeId))
});

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      currentThemeId: '',
      defaultTheme: null
    };

    this.handleThemeSelect = this.handleThemeSelect.bind(this);
  }

  componentDidMount() {
    this.setState({currentThemeId: this.props.currentThemeId});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentThemeId !== this.props.currentThemeId) {
      this.setState({currentThemeId: this.props.currentThemeId});
    }
  }

  handleThemeSelect(e) {
    this.setState({ currentThemeId: e.target.value });
    this.props.chooseTheme(e.target.value);
  }

  render() {
    const themes = this.props.themes.map((theme, i) => {
      if (theme.name === 'default' && !this.state.defaultTheme) {
        this.setState({ defaultTheme: theme._id});
      }

      return (
        <option
          value={theme._id}
          selected={theme._id === this.state.currentThemeId}
          key={i}
        >
          {theme.name}
        </option>
      )
    });

    return (
      <div className='theme-picker-container'>
        Theme:
        <select 
          defaultValue={this.state.defaultTheme} 
          onChange={this.handleThemeSelect} 
          className='theme-dropdown'>
          {themes}
        </select>
      </div>
    )
  }
}

export default connect(msp, mdp)(ThemePicker);