import React, {useRef, useState} from 'react';
import "./styles.css";
const buttons = ["1", "2", "3", "4", "5"]


function checkedCheckbox(btns , button) {
    btns.current.map((btn , index) => {
        if(index === button -1 && !btn.checked ) {
            btn.checked = true;
        } else  {
            btn.checked = false;
        }
    })
}

function changeColor(buttonsNodeList, buttonsContainer) {
    buttonsNodeList.current.forEach((button, index) => {
        if(button.checked === true) {
            buttonsContainer.current[index].className = "button-container selected"
            button.className = "button selected-text";
        } else {
            buttonsContainer.current[index].className = "button-container";
            button.className = "button";
        }
    })
}

const App = () => {
    const buttonsNodeList = useRef([])
    const buttonsContainer = useRef([])
    const form = useRef(null)
    const selected = useRef(null)
    const [selectedNumber, setSelectedNumber] = useState(``)
    
    return (
        <>
            {/* <!-- Rating state start --> */}
            <form className="form" ref={el => {form.current = el}}>
            <img alt="little star" src="/images/icon-star.svg" />
            <h2>How did we do?</h2>
    
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    
            <ul>
                {buttons.map((button, index) => {
                    return (
                        <li key={index} className="button-container"  ref={(el) => (buttonsContainer.current[index] = el)}>
                        <label className="button" ref={(el) => (buttonsNodeList.current[index] = el)} onClick={(event) => {
                            event.stopPropagation();
                            checkedCheckbox( buttonsNodeList, button);
                            if (event.target.checked) setSelectedNumber(`${button}`)
                            changeColor(buttonsNodeList, buttonsContainer);
                        }}> <input type="checkbox" onClick={(e) => e.stopPropagation()} /> {button}</label>
                    </li>
                    );
                })}
            </ul>
    
            <button onClick={(e) => {
                e.preventDefault();
                if( selectedNumber !== ``) {
                    form.current.style.display = "none";
                    selected.current.style.display = "block";
                }
            }}>SUBMIT</button>
            </form>
          {/* <!-- Rating state end --> */}
    
          {/* <!-- Thank you state start --> */}
            <section className='thank-you' ref={el => selected.current = el}>
                <img className='img-thank-you' alt="smartphone with a target" src="/images/illustration-thank-you.svg"></img>
                <p className='orange-text'>You selected {selectedNumber} out of 5</p>
                <h2>Thank you!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </section>
          {/* <!-- Thank you state end --> */}
        </>
    );
};

export default App;
