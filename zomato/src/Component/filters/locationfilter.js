import React,{Component} from 'react'
import axios from 'axios'

const url = "https://ancient-coast-82035.herokuapp.com/filter";


class LocationFilter extends Component{

    filterLocation = (event) =>{
        let locationId = event.target.value;
        let mealId = this.props.mealId;
        let locationUrl =""
        if(locationId === "")
        {
            locationUrl = `${url}/${mealId}`
        }
        else{
            locationUrl =  `${url}/${mealId}?state_id=${locationId}`
            console.log(locationUrl)
        }
        axios.get(locationUrl)
        .then((res) => {this.props.restPerLocation(res.data)})
    }


    render(){
        return(
            <>
            <center>Location Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterLocation}>
                 
                    <label className="radio">
                        <input type="radio" value="1" name="location"/>New Delhi
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="location"/>Maharashtra
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="location"/>Bangalore
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="location"/>Chandigarh
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="location"/>Kerala
                    </label>
                    <label className="radio">
                        <input type="radio" value="6" name="location"/>Tamil Nadu
                    </label>
                    <label className="radio">
                        <input type="radio" value="7" name="location"/>Andhra Pradesh
                    </label>
                </div>

            </>
        )
    }
}

export default LocationFilter