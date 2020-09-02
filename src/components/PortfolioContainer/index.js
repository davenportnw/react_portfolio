import React, {Component} from "react";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import { render } from "@testing-library/react";



class Portfolio extends Component {
    state = {
        currentPage: "Homepage"
    }
};

handlePageChange = page => {
    this.setState({ currentPage: page});
};

renderPage = () => {
if (this.state.currentPage === "Homepage") {
    return <Homepage />;
} else if (this.state.currentPage === "AboutMe") {
    return <AboutMe />;
} else if (this.state.currentPage === "Contact") {
    return <Contact />;
} else {
    return <Portfolio />;
}
};

render() {
    return (
        <div>
            <NavBar 
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
        </div>
    );
}


export default Portfolio;
