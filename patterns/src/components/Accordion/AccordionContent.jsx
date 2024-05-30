import { useAccordionContext } from "./Accordion";
import { useAccordianItemContext } from "./AccordionItem";

export default function AccordionContent({className, children}) {
    const {openItemId} = useAccordionContext();
    const id = useAccordianItemContext();

    const isOpen = openItemId === id;

    return (
        <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div> 
    );
}