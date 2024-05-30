import Accordion from "./components/Accordion/Accordion.jsx";
import Place from './components/SearchbleList/Place.jsx';
import { PLACES } from './components/SearchbleList/Places.js';
import SearchbleList from "./components/SearchbleList/SearchbleList.jsx";

function App() {
  return <main>
    <section>
      <h2>Why eork with me ?</h2>
      <Accordion className='accordion'>
        <Accordion.Item className='accordion-item' id="a">
          <Accordion.Title className='accordion-item-title'>
            I am the best
          </Accordion.Title>
          <Accordion.Content className='accordion-item-content'>
            <article>
              <p>BLA BLA BLABLA BLA BLABLA BLA BLABLA BLA BLABLA BLA BLA</p>
              <p>AAAAAAAAA ccccccccccccc CCCCCCCC</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className='accordion-item' id="b">
          <Accordion.Title className='accordion-item-title'>
            TTTT TTTTT
          </Accordion.Title>
          <Accordion.Content className='accordion-item-content'>
            <article>
              <p>TTTT xdxxxxxxxxx ddddddddddddddd</p>
              <p>yyyyyyyyyyyyy RRRRRRRRRRRRR AAAAAAAAAAAA</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>

    <section>
      <SearchbleList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item} />}
      </SearchbleList>
      <SearchbleList items={['item1', 'item2']} itemKeyFn={(item) => item}>
      {(item) => <p>{item}</p>}
      </SearchbleList>
    </section>
  </main>;
}

export default App;

