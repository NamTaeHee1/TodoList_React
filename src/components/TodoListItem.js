import React from 'react';
import './TodoListItem.css';
import {
    MdCheckBoxOutlineBlank, 
    MdCheckBox, 
    MdRemoveCircleOutline,
} from 'react-icons/md';


const TodoListItem = ({todo}) => {
    const { text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className="checkbox">
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div> 
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;