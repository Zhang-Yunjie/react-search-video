import React from 'react';


class SearchBar extends React.Component{
    state={term: ''};

    onChangeInput= event => {
        this.setState({term:event.target.value})
    }

    onFormSubmit= event => {
        event.preventDefault;
        // call callback from parent component
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}className="ui form">
                    <div className="field">
                        <label> Video Search </label>
                        <input 
                        type="text"
                        value={this.state.term}
                        onChange={this.onChangeInput} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;