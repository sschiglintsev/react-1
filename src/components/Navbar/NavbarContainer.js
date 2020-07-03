import React from "react";
import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

let NavbarContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            return <Navbar friends={store.getState().friendsPage.friends}/>
        }
        }
    </StoreContext.Consumer>
}

export default NavbarContainer;