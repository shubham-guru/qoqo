import React from 'react'
import { Col, Tabs } from "antd"

import "./prodSummaryStyle/prodSummaryTwo.css"
import ProdDescription from './ProdDescription';

const items = [
    {
        key: '1',
        label: 'Specification',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Description',
        children: <ProdDescription/>,
    },
];

const ProdSummaryTwo = () => {
    return (
        <Col className='prod-sum-one-container'>
            <Tabs defaultActiveKey="1" items={items} />
        </Col>
    )
}

export default ProdSummaryTwo