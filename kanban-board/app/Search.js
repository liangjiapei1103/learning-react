import React, { Component } from 'react';
import {render} from 'react-dom';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "React"
        };
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value.substr(0, 50)});
        console.log(event.target.value.substr(0, 50));
    }

    render() {
        return (
            <div>
                Search Term:
                <input type="search" value={this.state.searchTerm}
                    onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default Search;
