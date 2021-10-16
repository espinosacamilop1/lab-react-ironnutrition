import React from 'react'
import Foods from '../../foods.json'
import SearchBox from '../SearchBox'
import './foodBox.css'
export default class foodBox extends React.Component {
    state = {
        foodArr: Foods,
    }

    render() {

        return (
            <>
            <div className="container-mix">
                <SearchBox placeholder="Search for a Food" data={this.state.foodArr}/>
            </div>
            </>
        )
    }
}
