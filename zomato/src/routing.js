import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/Listing/listing';
import Details from './Component/Details/restDetails';
import ViewOrders from './Component/bookings/viewOrder';
import PlaceOder from './Component/bookings/placeOrder';
import Login from './Component/login/login';
import Register from './Component/login/register'

const Router = () =>{
    return (
        <BrowserRouter>
        <div>
           
            <Route exact path ="/" component= {Home} />
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details/:restId" component={Details}/>
            <Route path="/viewBooking" component={ViewOrders}/>
            <Route path="/placeOrder/:restName" component={PlaceOder}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
           
        
        </div>
        </BrowserRouter>
    )
}

export default Router