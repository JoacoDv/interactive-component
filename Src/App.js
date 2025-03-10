import React from 'react';
import "./styles.css";
const buttons = ["1", "2", "3", "4", "5"]


const App = () => {
  return (<>
    {/* <!-- Rating state start --> */}

    <form>
        <h1>How did we do?</h1>

        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <ul>
            {buttons.map(button => { 
                return <li><label><input type='checkbox' />{button}</label></li>
            })}
        </ul>

        <button>Submit</button>
    </form>

    {/* <!-- Rating state end --> */}

    {/* <!-- Thank you state start --> */}
    <section style={{"display": "none"}}>
        You selected {/* <!-- Add rating here --> */} out of 5

        Thank you!

        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
    </section>
    {/* <!-- Thank you state end --> */}

  </>);
};

export default App;
