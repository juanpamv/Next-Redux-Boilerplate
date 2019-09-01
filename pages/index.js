import React from "react";
import Link from "next/link";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreator";

let Home = () => {
    return(
        <React.Fragment>
            <h1>Hello from Home</h1>
            <Link href="/test">
                <a title="Test Page">Test Page</a>
            </Link>
        </React.Fragment>
    )
}



function mapStateToProps(state){
    return{
      users: [{
        name: "jp"
      }]
    }
  }
  
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

Home = connect(mapStateToProps , mapDispatchToProps)(Home);
  
export default Home;