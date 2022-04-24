import React,{Component} from 'react';
import './Search.css';
import { withRouter } from 'react-router-dom';

const lurl = "https://ancient-coast-82035.herokuapp.com/location";
const rurl = "https://ancient-coast-82035.herokuapp.com/restaurants?state_id="

class Search extends Component {

    constructor(props){
        super(props);
        console.log("inside constructor>>>")
        this.state={
            location:'',
            restData:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.stateid} key={item.stateid}>{item.state_name}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.restaurant_id} key={item.restaurant_id}>
                    {item.restaurant_name} | {item.address}
                </option>
                )
            })
        }
    }

    

    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restData:data})
        })
    }


    handleRest = (event) =>{
        let restId =event.target.value;
        this.props.history.push(`/details/${restId}`)
    }
    render(){
        console.log("inside render>>>",this.state.location)
        return(
            <div className="search">
                <div id="logo">
                    <span>e!</span>
                </div>
                <div id="heading">
                    Find The Best Restaurants Near You
                </div>
                <div className="dropdown">
                        <select id="city" onChange={this.handleCity}>
                            <option>----SELECT CITY----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restaurantSelect" id="hotels" onChange={this.handleRest}>
                            <option>----SELECT RESTAURANTS----</option>
                            {this.renderRest(this.state.restData)}
                        </select>
                </div>
            </div>
        )
    }

    //call api on page load 
    componentDidMount(){
        console.log("inside componentDidMount>>>")
        fetch(lurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search)