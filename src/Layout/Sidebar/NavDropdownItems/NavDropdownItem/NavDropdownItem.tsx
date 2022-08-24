import './NavDropdownItem.css';

type OwnProps = {
    text: string,
    isActive?: boolean,
    onClick: Function,
}
type Props = OwnProps;

const NavDropdownItem = (props: Props) => {

    const active = props.isActive ? props.isActive : false;

    return <button
        className={`nav-dropdown-link nav-button${active ? " active" : ""} w-100`}
        onClick={() => props.onClick()}
    >
        {
            props.text
        }
    </button>;
};

export default NavDropdownItem;
