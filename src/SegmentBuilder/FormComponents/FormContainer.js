import React, {  Component } from 'react';
import FormHeader from './FormHeaderComponents/FormHeader';
import FormBody from './FormBodyComponents/FormBody';

class FormContainer extends Component {

  constructor() {
    super();
    this.state = {
      formData: {
        formTitle: 'JB Fashion segments',
        searchTerms: {
          productSearchTerms: [],
          techSearchTerms: []
        },
        startDate: new Date(),
        availableSections: {geography: true, ageDemographics: true} //building out functionality to add sections
      }
    }

    this.addSearchTerm = this.addSearchTerm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  addSearchTerm(inputId, term){
      let productSearchTerms = this.state.formData.searchTerms.productSearchTerms;
      let techSearchTerms = this.state.formData.searchTerms.techSearchTerms;

      if(inputId === 'product') {
        productSearchTerms.push(term);
        this.setState({productSearchTerms: productSearchTerms});
      }
      else if(inputId === 'tech') {
        techSearchTerms.push(term);
        this.setState({techSearchTerms: techSearchTerms});
      }
      return;
    }

    handleDateChange(date){
      this.setState({startDate: date});
    }

  render (){

    const {
      userData
    } = this.props;

    return (
      <div>
        <form>
          <FormHeader
            userData={userData}
            formData={this.state.formData}
            />
          <FormBody
            formData={this.state.formData}
            addSearchTerm={this.addSearchTerm}
            handleDateChange={this.handleDateChange}
            />
        </form>
      </div>
    );
  }
}

export default FormContainer;
