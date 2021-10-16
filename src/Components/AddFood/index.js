import React from 'react'

export default class addFood extends React.Component {

    state = {
        name: '', 
        image: '', 
        calories: '',
        showForm: false,
        foods: []
    }

    onChangeHandler = event => {
        let {name, value} = event.target;

        this.setState({
            [name]: value
        })

    }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.addFoodToFoodList(this.state)



        this.setState({
            name: '', 
            image: '', 
            calories: '',
            quantity: '',
            showForm: false,
        })
    }

   showForm = () => {
     
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandler}></input>
                <label>Image: </label>
                <input type="text" name="image" value={this.state.image} onChange={this.onChangeHandler}></input>
                <label>Calories: </label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.onChangeHandler}></input>
            <button>Submit</button>
            </form>
        </div>
        )
    }

    render(){
        return (
            <div>
                <button onClick={()=> this.setState({showForm: true})}>
                    Add New Food
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
    
}
