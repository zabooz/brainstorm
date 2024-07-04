import trumpImage from '../assets/trump.webp'
import chuckImage from '../assets/chuck.jpg'
import soDeep from '../assets/soDeep.png'
import starWars from '../assets/Star_Wars_Logo.svg'
interface Params{
    [key:string] :string
}

export  interface Data{
    category:string,
    title:string,
    url:string,
    picture:string,
    name:string,
    params?: Params
}

type ApiData = {
    [key:string] :Data
}


export interface DataObject{
    [key:string] :Data,
}


export  const apiData: ApiData = {

    chuckNorris:{
        category:'Facts & Wisdom',
        title:'Chuck Norris Facts',
        name:'Chuck Norris',
        url: 'https://api.chucknorris.io/jokes/random',
        picture: chuckImage
    },
    donaldTrump:{
        category:'Facts & Wisdom',
        title:'What Donald Thinks',
        name:'Donald Trump',
        url:'https://www.tronalddump.io/random/quote',
        picture: trumpImage
    },
    wisdom:{
        category:'Facts & Wisdom',
        title:'Wisdom',
        name:'Wisdom',
        url:'https://api.quotable.io/random',
        picture : soDeep
    },
    pokedex:{
        category:'Pokemon',
        title:'Pokédex',
        name:'Pokedex',
        url:'https://pokeapi.co/api/v2/',
        picture:'#',
        params:{
            search:'pokemon/',
        }
    },
    starWars:{
        category:'Starwars',
        title:'Star Wars',
        name:'Star Wars',
        url : 'https://swapi.dev/api/',
        picture:starWars,
    },
    test:{
        category:'test',
        name:'test',
        title:'test',
        url:'picture',
        picture:'string'


    }
    
}