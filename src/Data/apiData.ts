import trumpImage from '../assets/trump.webp'
import chuckImage from '../assets/chuck.jpg'
import soDeep from '../assets/soDeep.png'



export  interface Data{
    title:string,
    url:string,
    picture:string
}


export interface DataObject{
    [key:string] :Data
}


export  const apiData  = {

    chuckNorris:{
        title:'Chuck Norris Facts',
        url: 'https://api.chucknorris.io/jokes/random',
        picture: chuckImage
    },
    donaldTrump:{
        title:'What Donald Thinks',
        url:'https://www.tronalddump.io/random/quote',
        picture: trumpImage
    },
    wisdom:{
        title:'Wisdom',
        url:'https://api.quotable.io/random',
        picture : soDeep
    }
    
}