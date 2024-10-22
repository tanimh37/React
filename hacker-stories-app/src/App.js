import Footer from "./Footer.js";
import Header, { msg } from './Header.js';
import myList from "./List.js";
import { data } from "./News.js";

function App() {
  return (
    <div>
      <Header />
      {msg}

      <h3>{data.title}</h3>
      <p>{data.details}</p>

      <h1>All News</h1>

      <ul>
        {myList.map(function (item) {
          return <li>{item.title}, {item.url}</li>;
        })}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
