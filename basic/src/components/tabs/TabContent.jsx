export default function TabContent(props){
    return(
        <>
            <div id="tab-content">
                {!props.content.title ? props.content : (
                    <>
                        <h3>{props.content.title}</h3>
                        <p>{props.content.description}</p>
                        <pre>
                            <code>
                                {props.content.code}
                            </code>
                        </pre>
                    </>
                )}
                
            </div>
        </>
    );
}