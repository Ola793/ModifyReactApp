import React from "react";
import { connect } from "react-redux";
import { setSelectedLanguage } from "../../redux/actions/popular.actions";
import { SelectedLanguages } from "./SelectedLanguages";
import { fetchPopularReposThunk } from "../../redux/thunk/popular.thunk";
import { Repos } from "./Repos";
import Loader from "../Loader";

const mapStateToProps = ({ popularReducer }) => ({
  selectedLanguage: popularReducer.selectedLanguage,
  repos: popularReducer.repos,
  error: popularReducer.error,
});

class Popular extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  componentDidMount() {
    this.fetchHandler(this.props.selectedLanguage);
  }

  fetchHandler(language) {
    this.props.dispatch(fetchPopularReposThunk(language));
  }

  selectLanguage(language) {
    if (language !== this.props.selectedLanguage) {
      this.props.dispatch(setSelectedLanguage(language));
      this.fetchHandler(language);
    }
  }

  render() {
    if (this.props.error) {
      return "Something wrong happened";
    } else {
      return (
        <div>
          {this.props.repos ? (
            <div>
              <SelectedLanguages
                selectedLanguage = { this.props.selectedLanguage }
                selectLanguageHandler = { this.props.repos ? this.selectLanguage : () => {return null;} }
              />
              <Repos repos = { this.props.repos } />
            </div>
          ) : ( 
            <div className="loader-wrapper">
              <Loader />
            </div>
          )}
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Popular);
