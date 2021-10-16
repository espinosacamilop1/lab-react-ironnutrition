import React, {useState} from 'react'
import AddFood from '../AddFood'

export default function SearchBox({placeholder, data}) {

    const [filteredData, setFilteredData] = useState(data)
    let [inputValue, setInputValue] = useState(0)
    const [foodLog, setFoodLog] = useState([]);

    const addNewFood = newFood =>{
        const foodsCopy = [...data]
        foodsCopy.unshift(newFood)
        data.unshift(newFood)
        setFilteredData(foodsCopy)
    }

    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
            setFilteredData(newFilter)  
    }

    const handleEventsInput = (e) => {
        setInputValue(e.target.value)
       
    }
    

    return (
        <div className="major-div">
        <h1>Iron Nutrition</h1>
            <input className="search-bar" onChange={handleFilter} type="search" placeholder={placeholder}></input>
            <AddFood addFoodToFoodList={addNewFood}/> 
            {
            <div className="div-flex">
                <div>
                {filteredData.map((food,key) => {
                    return (
                <div key={food.name}>
                    <div className="box">
                        <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt={food.name, `image`} />
                            </figure>
                        </div>
                    <div className="media-content">
                        <div className="content">
                        <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories} </small>
                        </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" min='0' placeholder='0' onChange={handleEventsInput}/>
                        </div>
                        <div className="control">
                            <button onClick={()=>{
                                const foodLogCopy = [...foodLog];
                                const foodName = food.name
                                const foodCalories = food.calories

                                const found = foodLogCopy.find(el => el.name === foodName)
                                console.log(found)
                                if(found) {
                                     found.amount += +(inputValue)
                                } else {
                                    foodLogCopy.push({name: foodName, calories: foodCalories, amount:parseInt(inputValue, 10)})
                                }
                                setFoodLog(foodLogCopy);    
                            }} className="button is-info">
                            +
                            </button>
                        </div>
                        </div>
                            </div>
                        </article>
                    </div> 
                </div>
                )})}
                </div>
                
                <div className="added-food">
                    <h2>Today's Food</h2>
                    <ul>
                        {foodLog.map((food)=> <li>
                           {food.amount} {food.name} = {parseInt(food.calories, 10) * parseInt(food.amount)} Cal
                        </li> )}
                    </ul>
                    <h4>
                        Total: {
                            foodLog.reduce((totalCalories, food) => {
                            return parseInt(totalCalories, 10) + parseInt(food.calories * food.amount, 10)}, 0) 
                        } Calories
                    </h4>
                </div>
            </div>
            }
            
        </div>
    )
}
  

// onChange={handleEventsInput}