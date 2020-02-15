import React, { Component } from 'react';
import axios from 'axios';

import classes from './ResultsLayout.css';
import SearchContext from '../../../context/search-context';
import Results from '../../../components/Results/Results';
import Paging from '../../../components/Paging/Paging';
import Aux from '../../../hoc/Aux';

class ResultsLayout extends Component {
  static contextType = SearchContext;

  state = {
    queryResponse: {},
    isDataDownloaded: false
  }

  componentDidMount() {
    this.changePage();
  }

  changePage() {
    const page = (this.props.match.params.page - 1) * 50;
    this.searchQueryRequest(page);
  }

  componentDidUpdate(prevProv, prevState) {
    if (this.props.match.params.page !== prevProv.match.params.page) {
      this.changePage();
    }
  }

  searchQueryRequest(offset) {
    axios.get(`/sites/${this.context.country.countryCode}/search?q=${this.props.match.params.name}&offset=${offset}`)
      .then(res => {
        this.setState({ queryResponse: res['data'], isDataDownloaded: true });
      })
      .catch(error => {
        this.setState({ 
          error: { 
            hasError: true,
            errorMessage: error
          }
        });
      })
      .finally(() => {
        this.setState({searching: false});
      });
  }

  render() {
    const resultView = (
      <Aux>
        <Paging 
          paging={this.state.queryResponse['paging']}
          active={Number(this.props.match.params.page)} />
        <Results results={this.state.queryResponse['results']} />
        <Paging 
          paging={this.state.queryResponse['paging']}
          active={Number(this.props.match.params.page)} />
      </Aux>
    );

    return(
      <div className={classes.ResultsLayout}>
        { this.state.isDataDownloaded ? resultView : null }
      </div>
    );
  }
}

export default ResultsLayout;
