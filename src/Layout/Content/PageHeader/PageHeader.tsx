import { ReactNode } from 'react';
import { Row, Col } from '../../../Components/UI/Grid/Grid';

type Props = {
    title: string;
    subtitle?: string;
    extraContent?: ReactNode;
}

const PageHeader = (props: Props) => {
    return <div className="d-flex flex-wrap border-bottom mb-4 align-items-center p-4 shadow-sm" >
        <div className="">
            <h4 className={`font-weight-600${props.subtitle ? " mb-2" : " mb-0"}`}>{props.title}</h4>
            {
                props.subtitle && <p className="mb-0 h6">{props.subtitle}</p>
            }
        </div>
        {
            props.extraContent && <div className='ms-auto'>{props.extraContent}</div>
        }
    </div>;
};

export default PageHeader;
