import { Link } from "../common";

const Header = (props) => {
    const handleChangeView = (view) => {
        props.setMainView(view)
    }
    return <header>
        <div className="navBar">
            <Link name={"name"} label="Bernard Calma"/>
            <Link name={"home"} label="_home" active={true}/>
            <Link name={"about-me"} label="_about-me"/>
            <Link name={"projects"} label="_projects"/>
        </div>
    </header>
};

export default Header;