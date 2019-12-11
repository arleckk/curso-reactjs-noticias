import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import SeccionNoticias from './components/SeccionNoticias';

class App extends Component {
  state = {
    noticias: []
  }
  
  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const URL_BASE = process.env.REACT_APP_API_URL;
    const TOP_HEADLINES_URL = `${URL_BASE}top-headlines?country=mx&category=${categoria}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    //const TOP_HEADLINES_URL = URL_BASE+'top-headlines?country=mx&category='+categoria+'&apiKey='+process.env.REACT_APP_NEWS_API_KEY;
    //const TOP_HEADLINES_URL = URL_BASE+'top-headlines?country=mx&category=${categoria}&apiKey='+process.env.REACT_APP_NEWS_API_KEY;

    /*
    const respuesta = await fetch(TOP_HEADLINES_URL);
    const noticias = await respuesta.json();
    */

    const noticias = await fetch(TOP_HEADLINES_URL).then(data => data.json());

    //console.log(noticias);
    console.log(TOP_HEADLINES_URL);

    this.setState({
      noticias : noticias.articles
    });

  }

  handleClick = (e) => {
    this.setState({
      categoria : e.target.value
    });
    this.consultarNoticias(e.target.value);
  }

  render() { 
    return ( 
      <Fragment>
        
        <Header />

        <div className="container">
          <SeccionNoticias handleClick={this.handleClick} noticias={this.state.noticias}/>
        </div>
      
      </Fragment>
    );
  }

}
 
export default App;