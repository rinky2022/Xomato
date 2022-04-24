import React,{Component} from 'react'
import axios from 'axios';
import './listing.css'
import ListingDisplay from './listingDisplay';
import Header from '../../Header';
import CuisineFilter from '../filters/cuisinefilter';
import CostFilter from '../filters/costfilter';
import SortFilter from '../filters/sortfilter';
import LocationFilter from '../filters/locationfilter';

const restUrl = "https://ancient-coast-82035.herokuapp.com/restaurants?meal_id="


class Listing extends Component{
    constructor(props){
        super(props);

        this.state={
            restaurantList:''
        };
    }


    
    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                            <CuisineFilter mealId={this.props.match.params.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter  mealId={this.props.match.params.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <LocationFilter mealId={this.props.match.params.mealId}
                            restPerLocation={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <SortFilter mealId={this.props.match.params.mealId}
                            restPerSort={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    ///
    async componentDidMount(){
        let mealid = this.props.match.params.mealId;       
        sessionStorage.setItem('mealId',mealid)
        let response = await axios.get(`${restUrl}${mealid}`)
        this.setState({restaurantList:response.data})
        
    }
}

export default Listing