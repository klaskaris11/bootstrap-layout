import { ReactNode } from 'react';
import './Footer.css'

type Props = {
    children: ReactNode;
}

const Footer = (props: Props) => {
    return <footer className="footer-container border-top py-3">
        {props.children}
    </footer>
};

export default Footer;
