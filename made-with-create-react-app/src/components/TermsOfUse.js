import {useState} from 'react';

function TermsOfUse() {

   const [displayText, setDisplayText] = useState(false);

    function showText() {

        setDisplayText(true);
    }

      const paragraphText = displayText ? <p>This is the hidden Terms Of Use Text, you take full responsibility for your actions</p> : null;



    return(
        <>
            <section>
                <button onClick={showText}>Show Terms of Use Summary
                </button>
                <p>{paragraphText}</p>
            </section>
        </>
    )

}

export default TermsOfUse;