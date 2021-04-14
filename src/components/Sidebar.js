import React from 'react'



const sideBar = ({updateChannel}) => {
    return (
    <div className="menu">
        <li class="menu__link" onClick={() => updateChannel("SVT 1")}>SVT 1</li>
        <li class="menu__link" onClick={() => updateChannel("SVT 2")}>SVT 2</li>
        <li class="menu__link" onClick={() => updateChannel("SVT Barn")}>SVT Barn</li>
        <li class="menu__link" onClick={() => updateChannel("Kunskapskanalen")}>Kunskapskanalen</li>
        <li class="menu__link" onClick={() => updateChannel("SVT 24")}>SVT 24</li>
    </div>
    )
}

export default sideBar