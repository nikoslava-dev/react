export default function TabButton(props)
{
    return (
        <li>
            <button className={props.isActive ? 'active' : ''} onClick={props.onClick}>{props.children}</button>
        </li>
    );
}