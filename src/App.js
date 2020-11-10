
import React from "react";
import "./App.css";
import Button from 'react-bootstrap/Button';
class App extends React.Component {
  state = {
    show: false,
    person: {
      fullName: "Souid Monia",
      bio: "Je suis un developpeur FullStack Junior, j'habite à Sayada-Monastir, je cherche un offre d'emploie qui enrichie mes compétances,j'aime la musique et le voyage.",
      profession: "Developpeur Web FullStack Junior",
      imgSrc :"https://cdn.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png",
    },
  };
  showH1 = () => {
    this.setState({show : !this.state.show})
  }
  render() {
    //const { show,person } = this.state;
    return (
      <div className="App">
{this.state.show ? <div>
  <h1>{this.state.person.fullName}</h1>
  <h1>{this.state.person.bio}</h1>
  <h1>{this.state.person.profession}</h1>
  <h1>{this.state.person.imgSrc}</h1>
  <img src={this.state.person.imgSrc}/>
</div> : null}
 
        <Button onClick={this.showH1}>Person Profile</Button>
      
      </div>
    )
  }
}

export default App;