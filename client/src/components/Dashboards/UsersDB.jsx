import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
// import axios from "axios";


const Dashboard = () => {

    const [subscriptions, setSubscriptions] = useState([]);
  
    // useEffect(() => {
    //   addSubs();
    // }, []);
  
    // Function def that triggers the API call to get all subs in the sub in the database
  // const addSubs = () => {
  //   axios
    // .post(`/api/users/login/${id}`)
      // .then((response) => {
        // console.log(response.data);
  //       setSubscriptions(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

// FIX ME: Once the routes are working, put this into a useEffect Hook.
// add the id variable later

// Add a useState for subscription
// Add a useEffect

// axios
// .post(`/api/users/login/${id}`, {
  
// //  Added state to this component and pulled values from state into the POST body.
  
// })
// const [subscriptions,setSubscriptions] =useState([]);


// Elements in component styles
const styles = {
  thead: {
    backgroundColor: "#DCDCDC",
    fontFamily: "Roboto",
  },
  img: {
    height: "2em",
  },
  buttons: {
    borderRadius: 30,
    backgroundColor: "#008000",
    fontFamily: "Roboto",
  }
};
  return (
    <>
    <br/>
    <br/>
    <div>
    <div className="container">
    <div className="row">
    <div className="col s12">
    <table>
        <thead style={styles.thead}>
          <tr>
            <th>Subscription Name</th>
            <th>Logo</th>
            <th>Current Plan</th>
            <th>Plan Price Change</th>
            <th>Category</th>
            <th>Update Subscription</th>
            <th>Delete Subscription</th>
          </tr>
        </thead>
        <tbody>
{subscriptions.map(subscription=>(
<tr key={subscription._id} >
            <td>{subscription.subscription_name}</td>
            <td style={styles.img}>Image</td>
            <td>{subscription.subscription_price}</td>
            <td>Music Streaming</td>
            <td><button className="waves-effect waves-light btn-small" style={styles.buttons}><i className="material-icons left">update</i>UPDATE</button></td>
            <td><button className="waves-effect waves-light btn-small" style={styles.buttons}><i className="material-icons left">delete</i>DELETE</button></td>
          </tr>
))}
        </tbody>
      </table>
    </div>
    </div>
    <div className="row center align">
    <Link to="/subscriptions">
                <button
                  className="waves-effect waves-light btn-large"
                  style={styles.buttons}
                >
                  <i className="material-icons left">add</i>Add New Subscription
                </button>
              </Link>
    </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
