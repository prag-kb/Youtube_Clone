import React from 'react';
import "./SidebarRow.css";

function SidebarRow({title, Icon, selected}) {
  return (
    <div className='sidebarRow'>
        <Icon className={`sidebarRow_icon ${selected && "selected" }`} />
        <h2 className='sidebarRow_title'> {title}</h2>
    </div>
  )
}

export default SidebarRow