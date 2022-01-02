import React from "react";
import axios from "axios";

class PokemonDetail extends React.Component{


    state = {
        pokemonsInfo:[]
    }

    async componentDidMount() {     
        const { data } = await axios.get('https://api.pokemontcg.io/v1/cards?setCode=base1')
        const pokeData = data.cards
        this.setState({pokemonsInfo: pokeData})
        console.log(this.state.pokemonsInfo)
        console.log(this.state.readMore)
    }

    readMore() {

        const readBtn = document.querySelector("#readMore")
        const readContainer = document.querySelector("#readMoreCon")
        readBtn.addEventListener("click", (e) => {
            e.preventDefault()
            readContainer.classList.toggle('d-none')
        })
    }

    render(){
        return (    
            <div>
                
                {
                    this.state.pokemonsInfo.map(card => {
                        if(card.name == this.props.match.params.name){
                            return (
                                <div className="text-center" key={card.id}><img className="img-fluid" src={card.imageUrl}/>
                                <h1>{card.name}</h1>
                                <button id="readMore" onClick={this.readMore} className="btn btn-primary">Double Click for more infos..</button>
                                <div id="readMoreCon" className="d-none">
                                    <h4>HP: {card.hp}</h4>
                                    <h4>National Pokedex No.: {card.nationalPokedexNumber}</h4>
                                    <h4>Card No.: {card.number}</h4>
                                    <h4>Rarity: {card.rarity}</h4>
                                    <h4>Subtype: {card.subtype}</h4>
                                    <h4>Types: {card.types}</h4>
                                    <h4>Super Type: {card.supertype}</h4>
                                </div>
                                </div>
                            );
                        }

                    })

                }
            </div>
        )
    }

}

export default PokemonDetail;