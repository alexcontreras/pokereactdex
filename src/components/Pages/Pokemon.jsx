import axios from 'axios';
import React, { Component } from 'react';

export class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
        };
    }
    componentDidMount() {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => console.log(response.data));
    }
    render() {
        return <div></div>;
    }
}

export default Pokemon;
