import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import "../stylecomponents/Type_and_Brand.css"

const TypeBar = observer(() => {        //обернем все в observer, чтобы отслеживать состояние
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === product.selectedType.id}
                    className="typebar mt-2"
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;