import React from 'react';
import './TodoInsert.css';
import {MdAdd} from 'react-icons/md';

const TodoInsert = () => {
    return (
        <from className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </from>
    );
};

export default TodoInsert;

