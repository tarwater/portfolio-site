import React, {Component} from 'react';
import classes from './Navbar.module.css';
import NavButton from "./NavButton/NavButton";
import LogoImg from '../../assets/myLogo.png';
import SecondaryNavButton from "./SecondaryNavButton/SecondaryNavButton";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import MobileNavBar from "./MobileNavBar/MobileNavBar";

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "home", // could also be about, skills, work, contact
            showMobileNav: false
        }
    }

    navButtonClickHandler = (page) => {
        this.setState({
            page: page
        });
    };

    hamburgerClick = () => {
        this.setState({
            showMobileNav: !this.state.showMobileNav
        })
    };

    render() {

        let mobileNavClasses = classes.MobileNav;

        if(this.state.showMobileNav) {
            mobileNavClasses += " " + classes.MobileNavShow;
        } else {
            mobileNavClasses += " " + classes.MobileNavHide;
        }

        return (
            <div className={classes.Navbar}>
                <div className={classes.Logo}>
                    <img src={LogoImg} alt="logo"/>
                </div>
                <div className={classes.NavButtons}>
                    <NavButton page={this.state.page} icon={"home"} text={"home"}
                               clickHandler={this.navButtonClickHandler}/>
                    <NavButton page={this.state.page} icon={"user"} text={"about"}
                               clickHandler={this.navButtonClickHandler}/>
                    <NavButton page={this.state.page} icon={"tools"} text={"skills"}
                               clickHandler={this.navButtonClickHandler}/>
                    <NavButton page={this.state.page} icon={"keyboard"} text={"work"}
                               clickHandler={this.navButtonClickHandler}/>
                    <NavButton page={this.state.page} icon={"paper-plane"} text={"contact"}
                               clickHandler={this.navButtonClickHandler}/>
                </div>
                <div className={classes.SecondaryNav}>
                    <SecondaryNavButton link={"https://github.com/tarwater"} icon={['fab', 'linkedin']}/>
                    <SecondaryNavButton link={"https://www.linkedin.com/in/clay-holt"} icon={['fab', "github"]}/>
                </div>
                <div className={classes.HamburgerMenuContainer}>
                    <HamburgerMenu clickHandler={this.hamburgerClick}/>
                </div>
                <div className={mobileNavClasses}>
                    <MobileNavBar page={this.state.page} >
                        <NavButton page={this.state.page} icon={"home"} text={"home"}
                                   clickHandler={this.navButtonClickHandler}/>
                        <NavButton page={this.state.page} icon={"user"} text={"about"}
                                   clickHandler={this.navButtonClickHandler}/>
                        <NavButton page={this.state.page} icon={"tools"} text={"skills"}
                                   clickHandler={this.navButtonClickHandler}/>
                        <NavButton page={this.state.page} icon={"keyboard"} text={"work"}
                                   clickHandler={this.navButtonClickHandler}/>
                        <NavButton page={this.state.page} icon={"paper-plane"} text={"contact"}
                                   clickHandler={this.navButtonClickHandler}/>
                    </MobileNavBar>
                </div>

            </div>
        )
    }

}

export default NavBar;
