import React from 'react'



const sideBar = ({updateChannel}) => {
    return (
    <div className="menu">
        <ul>
            <li className="menu__link" onClick={() => updateChannel("SVT 1")}>SVT 1</li>
            <li className="menu__link" onClick={() => updateChannel("SVT 2")}>SVT 2</li>
            <li className="menu__link" onClick={() => updateChannel("SVT Barn")}>SVT Barn</li>
            <li className="menu__link" onClick={() => updateChannel("Kunskapskanlen")}>Kunskapskanalen</li>
            <li className="menu__link" onClick={() => updateChannel("SVT 24")}>SVT 24</li>
        </ul>
    </div>
    )
}

export default sideBar