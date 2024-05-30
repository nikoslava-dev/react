import { useAccordionContext } from "./Accordion";
import { useAccordianItemContext } from "./AccordionItem";

export default function AccordionTitle({className, children}) {
    const {toggleItem} = useAccordionContext();
    const id = useAccordianItemContext();
    
    return (
        <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    );
}