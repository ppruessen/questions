import { useState } from "react";
import questions from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const App = () => {
  return <main>
    <section className="container">
      <h1>Questions</h1>
      { questions.map(({ id, title, info }) => {
        const [toggle, setToggle] = useState(false);
        return (
            <article key={id} className="question">
              <header>
                <h5>{title}</h5>
                <button className="question-btn" onClick={() => setToggle(!toggle)}>
                  { toggle ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
              </header>
              {toggle && <p>{info}</p>}
            </article>
        )
      })}
    </section>
   </main>;
};
export default App;
