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
            showMobileNav: false
        };

    }

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
                    <NavButton page={this.props.page} icon={"home"} text={"home"}
                               clickHandler={this.props.pageChangeHandler}/>
                    {/*<NavButton page={this.props.page} icon={"user"} text={"about"}*/}
                    {/*           clickHandler={this.props.pageChangeHandler}/>*/}
                    <NavButton page={this.props.page} icon={"tools"} text={"skills"}
                               clickHandler={this.props.pageChangeHandler}/>
                    <NavButton page={this.props.page} icon={"keyboard"} text={"work"}
                               clickHandler={this.props.pageChangeHandler}/>
                    <NavButton page={this.props.page} icon={"paper-plane"} text={"contact"}
                               clickHandler={this.props.pageChangeHandler}/>
                </div>
                <div className={classes.SecondaryNav}>
                    <SecondaryNavButton link={"https://github.com/tarwater"} icon={['fab', 'github']}/>
                    <SecondaryNavButton link={"https://www.linkedin.com/in/clay-holt"} icon={['fab', "linkedin"]}/>
                </div>
                <div className={classes.HamburgerMenuContainer}>
                    <HamburgerMenu clickHandler={this.hamburgerClick}/>
                </div>
                <div className={mobileNavClasses}>
                    <MobileNavBar page={this.props.page} >
                        <NavButton page={this.props.page} icon={"home"} text={"home"}
                                   clickHandler={this.props.pageChangeHandler}/>
                        {/*<NavButton page={this.props.page} icon={"user"} text={"about"}*/}
                        {/*           clickHandler={this.props.pageChangeHandler}/>*/}
                        <NavButton page={this.props.page} icon={"tools"} text={"skills"}
                                   clickHandler={this.props.pageChangeHandler}/>
                        <NavButton page={this.props.page} icon={"keyboard"} text={"work"}
                                   clickHandler={this.props.pageChangeHandler}/>
                        <NavButton page={this.props.page} icon={"paper-plane"} text={"contact"}
                                   clickHandler={this.props.pageChangeHandler}/>
                    </MobileNavBar>
                </div>

            </div>
        )
    }

}

export default NavBar;
