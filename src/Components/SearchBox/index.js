import React, {useState} from 'react'
import AddFood from '../AddFood'

export default function SearchBox({placeholder, data}) {

    const [filteredData, setFilteredData] = useState(data)

    const addNewFood = newFood =>{
        const foodsCopy = [...data]
        foodsCopy.push(newFood)
        data.push(newFood)
        setFilteredData(foodsCopy)
    }
    
   

    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
            setFilteredData(newFilter)  
   


    }
    return (
        <div>
            <input onChange={handleFilter} type="search" placeholder={placeholder}></input>
            <AddFood addFoodToFoodList={addNewFood}/> 
            {
                <div>
                {filteredData.map((food, key) => {
                    return (
                        <div>
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
                            <input className="input" type="number" value="1" />
                        </div>
                        <div className="control">
                            <button className="button is-info">
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
           
            }
            
        </div>
    )
}