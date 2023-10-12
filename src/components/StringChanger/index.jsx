import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateString } from '../../redux/slices/stringSlice';  

const StringChanger = () => {
    const stringValue = useSelector((state) => state.string.value);  

    const dispatch = useDispatch();
    const [newString, setNewString] = useState('');

    const handleUpdateString = () => {
        dispatch(updateString(newString));
        setNewString('');
    };

    return (
        <div> 
            <p>Current String: {stringValue}</p>
            <input type="text" value={newString} onChange={(e) => setNewString(e.target.value)}/>
            <button onClick={handleUpdateString}>Change String</button>
       </div>
  );
};

export default StringChanger;
