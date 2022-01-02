import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


class Home extends React.Component{

    state = {
        pokemons:[],
        value:"",
        newVal:"",
    }

    async componentDidMount() {     
        const { data } = await axios.get('https://api.pokemontcg.io/v1/cards?setCode=base1')
        const pokeData = data.cards
        this.setState({pokemons: pokeData})
    }

    handleClick(event) {
        const id = event.target.id;
        console.log(id);
      }

    handleChange = (e) => {
    const val = e.target.value
    this.setState({ value: val })
    console.log(val)
    }

    onSearchSubmit = (e) => {
        const val = document.getElementById('searchValue').value;
        const newVal = val[0].toUpperCase() + val.slice(1).toLowerCase()
        this.setState({newVal:`/pokemon/${newVal}`})
        console.log(this.state.newVal)
        
    }


    render(){
        return (
            <div>
                <div id="the-basics">
                    <input id="searchValue" className="typeahead" type="text" placeholder="Search Pokemon" onChange={this.handleChange} value={this.state.value}/>
                    <Link to={this.state.newVal}><button className="btn btn-primary m-2" onClick={this.onSearchSubmit}>Search Pokemon</button></Link>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        {
                            this.state.pokemons.map(card => {
                                return (
                                    <div className="col text-center m-3" key={card.id}><img className="img-fluid" src={card.imageUrl}/><br/><Link to={`/pokemon/${card.name}`}><button className="btn btn-success m-2" onClick={this.handleClick}>Click Pokemon</button></Link></div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;