import React from 'react';
import './QnA.css'

const QnA = () => {
    return (
        <div className='qna'>
            <p><mark>How react works? </mark><br />
                 React is a declarative, efficient, and flexible JavaScript library for building user interfaces. with react we can build complex UIs from small and isolated pieces of code called component. with virtual dom,  reacts uses a strategy that updates the DOM without having to redraw all the webpage elements. This ensures that the actual DOM receive only the necessary data to repaint the UI.
            </p>
            <p> <mark>Difference between props and state</mark> <br />
            props is readable only, cant be changed.State is both read and write. State is something that could change . <br />
            props get passed to the component whereas state is managed within the component
            </p>
            <p><mark>What are the cases to use useEffect? </mark><br />
               we use useEffect hook not only for fetching data but for many other reasons.The useEffect Hook allows us to perform side effects in components, we use it when we need to chanfge state of any element.
            </p>
        </div>
    );
};

export default QnA;