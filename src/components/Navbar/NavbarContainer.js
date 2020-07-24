import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar);

export default NavbarContainer;