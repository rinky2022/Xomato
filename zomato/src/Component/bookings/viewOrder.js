import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';

const url = "https://ancient-coast-82035.herokuapp.com/updateOrder";
const url2 ="https://ancient-coast-82035.herokuapp.com/orders"


class ViewOrder extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login First To Check Order</h2>
                    </center>
                </>

            )
        }
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo').split(',')[1]
        if(this.props.location){
            let queryp = this.props.location.search;
            //console.log("status",queryp.split('&')[0].split('=')[1])
            if(queryp){
                let data ={
                    // "status":queryp.split('&')[0].split('=')[1],
                    // "date":queryp.split('&')[2].split('=')[1],
                    "bank_name":queryp.split('&')[3].split('=')[1]
                }
                let status=queryp.split('&')[0].split('=')[1]
                // let date=queryp.split('&')[2].split('=')[1]
                //let bank_name=queryp.split('&')[3].split('=')[1]
                
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];
                let bankName = data.bank_name.replaceAll("%20","-")
                console.log(bankName)
                
               
                fetch(`${url}/${id}?status=${status}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    //body: JSON.stringify(data)
                    body: JSON.stringify(data)

                })
            }
        }
        window.alert("Thanks for ordering!! Come again")
        axios.get(`${url2}?email=${email}`).then((res) => {this.setState({orders:res.data})})
        console.log(this.state.orders)
    }
}

export default ViewOrder;