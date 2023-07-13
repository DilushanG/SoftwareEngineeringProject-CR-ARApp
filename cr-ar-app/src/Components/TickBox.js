import React from 'react';

function TickBox(props) {
    const { checked, onChange } = props;
  
    return (
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>Tick Box</span>
      </label>
    );
  }
  
  export default TickBox;
  