import { useState } from "react";

export default function Player({name, symbol, isActivePlayer}){
    const [isEdit, setIsEdit] = useState(false);
    const [userName, setUserName] = useState(name);

    const staticUserName = <span className="player-name">{userName}</span>;
    const dynamicUserName = <input type="text" required value={userName} onChange={userNameChanged} />;
    const playerNameTemplate = !isEdit ? staticUserName : dynamicUserName;

    function handleClick(){
        setIsEdit(prev => !prev);
    }

function userNameChanged(e){
    setUserName(prev => e.target.value);
}

    return (
        <li className={ isActivePlayer ? 'active' : undefined }>
            <span className="player">
                { playerNameTemplate }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEdit ? "Edit" : "Save"}</button>
          </li>
    );
}