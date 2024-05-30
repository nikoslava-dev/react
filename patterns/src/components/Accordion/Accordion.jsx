import { createContext, useContext, useState } from 'react';
import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);
    if (!ctx) {
        throw new Error('Accordion-relate component must be wrapped in <Accordion>');
    }

    return ctx;
}

export default function Accordion({className, children}) {
    const [openItemId, setOpenItemId] = useState(null);

    function toggleItem(id) {
        setOpenItemId(prev => prev === id ? null : id);
    }
    
    const contextValue = {
        openItemId: openItemId,
        toggleItem: toggleItem
    };    

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent