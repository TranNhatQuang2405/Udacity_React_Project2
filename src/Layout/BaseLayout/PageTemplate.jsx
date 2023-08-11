import React from 'react'
import Header from './Header';
import Body from './Body';
import "./PageTemplate.css"
import { Container } from 'react-bootstrap';

function PageTemplate({ children }) {
    return (
        <Container fluid className='fix_scroll PageTemplate__box'>
            <Header title={children?.title} />
            <Body>
                {children}
            </Body>
        </Container>
    )
}

export default PageTemplate