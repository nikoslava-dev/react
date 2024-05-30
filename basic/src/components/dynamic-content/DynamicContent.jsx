export default function DynamicContent({children, buttons, ButtonsContainer = 'div'}){
    return(
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
