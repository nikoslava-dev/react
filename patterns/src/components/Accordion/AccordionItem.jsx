import { createContext, useContext } from 'react';

const AccordionItemContext = createContext()

export function useAccordianItemContext() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error('No Accordion item context found');
    }

    return ctx;
}

export default function AccordionItem({id, className, children}) {    
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>{children}</li>
        </AccordionItemContext.Provider>        
    );
}