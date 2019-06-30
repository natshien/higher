import React from 'react';
import ReactDOM from 'react-dom';

class Pic1 extends React.Component {

  render() { 
    console.log('INDEX 1 ', this.props.index);
    return ( <img src={this.props.gallery[this.props.index].download_url} style={{ width: "500px", hight: "400px" }} /> );
  }
}

class Pic2 extends React.Component {

  render() { 
    console.log('INDEX 2 ', this.props.index);
    return ( <img src={this.props.gallery[this.props.index].download_url} style={{ width: "500px", hight: "400px" }} /> );
  }
}

class Pic3 extends React.Component {
  
  render() { 
    console.log('INDEX 3 ', this.props.index);
    return ( <img src={this.props.gallery[this.props.index].download_url} style={{ width: "500px", hight: "400px" }} /> );
  }
}


class App extends React.Component {
  state = {
    gallery: [],
    index1: 0,
    index2: 1,
    index3: 2
  }

  handleClick = () => {
    //console.log('CLICKED !')
    this.setState({ index1: this.state.index1 +3})
    this.setState({ index2: this.state.index2 +3})
    this.setState({ index3: this.state.index3 +3})
    }
  
    componentDidMount() {
      fetch(`https://picsum.photos/v2/list`)
        .then(res => {
        console.log('RES ', res)
        return res.json()
      })
        .then(json => {
        this.setState({ gallery: json }, () => {
        });
      });
    }
    
    render() {
      let { gallery } = this.state;
     
      if(!gallery || !gallery.length) {
        return (<h4> Waiting
        for server 's response </h4>);
      } else {
        console.log('GALLLERY ', gallery);
        return <div style={{ margin: "0 auto" }} >
          <h1 style={{ margin: "0 auto" }}> Gallery Slider </h1><br />
          <button onClick={this.handleClick}> NEXT </button><br/><br/>
          <div className="gallery_display" style={{ display: 'flex', justifyContent: "space-between", margin: "0 auto", padding: "0 50px"}} >
          < Pic1 gallery={this.state.gallery} index = {this.state.index1} style={{flex: 1}}/>
          < Pic2 gallery={this.state.gallery} index ={this.state.index2} style={{flex: 1}}/>
          < Pic3 gallery={this.state.gallery} index = {this.state.index3} style={{flex: 1}}/>
          </div>          
        </div>;
      }
      
    }
  }
  
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
