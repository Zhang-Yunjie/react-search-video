import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    render() {
    return (
        <div className="ui container">
            <SearchBar />
        </div>
    );
    }
}
export default App;