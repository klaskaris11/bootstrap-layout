import { Row, Col } from '../../../Components/UI/Grid/Grid';

type Props = {
    title: string;
    subtitle?: string
}

const PageHeader = (props: Props) => {
    return <Row classes={["border-bottom", "border-2", "mb-4"]} align="center">
        <Col classes={["px-3", "py-4"]}>
            <h4 className={`font-weight-600${props.subtitle ? " mb-2" : " mb-0"}`}>{props.title}</h4>
            {
                props.subtitle && <p className="mb-0 h6">{props.subtitle}</p>
            }
        </Col>
    </Row>;
};

export default PageHeader;
