import trumpImage from '../assets/trump.webp'
import chuckImage from '../assets/chuck.jpg'
import soDeep from '../assets/soDeep.png'



export  interface Data{
    title:string,
    url:string,
    picture:string,
    name:string
}


export interface DataObject{
    [key:string] :Data
}


export  const apiData  = {

    chuckNorris:{
        title:'Chuck Norris Facts',
        name:'Chuck Norris',
        url: 'https://api.chucknorris.io/jokes/random',
        picture: chuckImage
    },
    donaldTrump:{
        title:'What Donald Thinks',
        name:'Donald Trump',
        url:'https://www.tronalddump.io/random/quote',
        picture: trumpImage
    },
    wisdom:{
        title:'Wisdom',
        name:'Wisdom',
        url:'https://api.quotable.io/random',
        picture : soDeep
    }
    
}