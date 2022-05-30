import React from "react";
import { SelectedLanguages } from "./SelectedLanguages";
import { fetchPopularRepos } from "../../utils/api";
import { Repos } from "./Repos";
import Loader from "../Loader";

class Popular extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null,
      error: null,
    };
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  componentDidMount() {
    this.fetchHandler(this.state.selectedLanguage);
  }

  fetchHandler(language) {
    fetchPopularRepos(language)
      .then((data) => this.setState({ repos: data }))
      .catch((error) => this.setState({ error: error.message }));
  }

  selectLanguage(language) {
    if (language !== this.state.selectedLanguage) {
      this.setState({ selectedLanguage: language, repos: null });
      this.fetchHandler(language);
    }
  }

  render() {
    if (this.state.error) {
      return "Something wrong happened";
    } else {
      return (
        <div>
          {this.state.repos ? (
            <div>
              <SelectedLanguages
                selectedLanguage = { this.state.selectedLanguage }
                selectLanguageHandler = { this.state.repos ? this.selectLanguage : () => { return null; } }
              />
              <Repos repos = { this.state.repos } />
            </div>
          ) : ( 
            <div className = "loader-wrapper">
              <Loader />
            </div>
          )}
        </div>
      );
    }
  }
}

export default Popular;
