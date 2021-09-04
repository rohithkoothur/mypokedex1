import { savedpokemons } from "../../../data/savedpokemon";

export default function handler(req,res){
    if(req.method ==='GET'){
    res.status(200).json(savedpokemons)
}else if(req.method==='POST'){
    const addPokemon = req.body.addPokemon
    const newPokemon = {
        id:Date.now(),
        name:addPokemon
    }
    savedpokemons.push(newPokemon)
    res.status(201).json(newPokemon)
}
}