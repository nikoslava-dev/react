import { CORE_CONCEPTS } from "../../assets/data";
import Section from "../Section";
import CoreConcept from "./core-concept";

function CoreConsepts(){
    return (
        <Section title="Core Consepts" id="core-concepts">
            <ul>
            {
                CORE_CONCEPTS.map((corConsept, index) => (
                <CoreConcept key={index} {...corConsept}></CoreConcept>
                ))
            }
            </ul>
        </Section>
    );
}

export default CoreConsepts;