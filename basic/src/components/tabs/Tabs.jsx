import Section from "../Section";
import TabButton from "./TabButton";

export default function Tabs(props)
{
    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton isActive={props.selectedTab === 0} 
                    onClick={() => props.handleClick(0)}>Componets</TabButton>
                <TabButton  isActive={props.selectedTab === 1} 
                    onClick={() => props.handleClick(1)}>JSX</TabButton>
                <TabButton  isActive={props.selectedTab === 2} 
                    onClick={() => props.handleClick(2)}>Props</TabButton>
                <TabButton  isActive={props.selectedTab === 3} 
                    onClick={() => props.handleClick(3)}>State</TabButton>
            </menu>
        </Section>
    );
}