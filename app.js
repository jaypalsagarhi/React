import React from "react";
import ReactDOM from "react-dom/client";
/* const element = React.createElement("h1", {id:"heading",xyz:"abc"} ,"React Heading Content Data");
console.log(element);  // return object */



const Header = () => {
    return (
        <div className="header">
            <div className="logo_container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOO0Qzq3gWFXOeIGKjH9xAPsGfMHTEG-JGhZNA9X9CqQ&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResturantCard = (props) => {
    const {resName,cusine} = props
//console.log(props);
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="Food image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzws2-pab3dyTcoWxP9eZ7nRaKONa6EeNrrAZF07irzryv_U7uj7By8KJCmlCnPQNvfOE&usqp=CAU"/>
            <h3>{resName}</h3>
            <h4>{cusine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 Minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard resName="Meghana Foods" cusine="Biryani,North Indian,Asian" />
                
                <ResturantCard resName="KFC" cusine="Burger,Fast Food"/>
                
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);
}



const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(Header);
root.render(<AppLayout />);
//root.render(<HeadingComponent></HeadingComponent>);
//root.render(HeadingComponent());





/* 
ReactElement(Object) -> Browser Understand:
*/