import { useState } from "react";
import { EXAMPLES } from "../assets/data";
import DynamicContent from "./dynamic-content/DynamicContent.jsx";
import TabContent from "./tabs/TabContent";
import Tabs from "./tabs/Tabs";

export default function Examples()
{
    const [tabSelected, setTabSelected] = useState(null);

    let tabContent = <p>Please choose topic...</p>

    if (tabSelected !== null){
        tabContent = EXAMPLES[tabSelected];
    }

    function handleClick(clickedTab){
        setTabSelected(prev => prev = clickedTab);
    }

    return(
        <DynamicContent ButtonsContainer='menu' buttons={<Tabs handleClick={handleClick} selectedTab={tabSelected} />}>
            <TabContent content={tabContent} />
        </DynamicContent>
    );
}
