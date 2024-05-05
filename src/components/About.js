import React, { useState } from 'react'

export default function About() {

    //  making object for the style as in react
    // let color = {
    //     color: "red",
    //     background: "black"
    // };

    //dark mode
    const [mycolor, setColor] = useState({
        color: "white",
        background: "black"
    })
    // for the button of the dark mode
    const [mybutton, mybuttoncolor] = useState("Enable dark mode");

    const themestyle = () => {
        if (mycolor.color === "black") {
            setColor({

                color: "white",
                background: "black",
                border:"0.5px solid white"
            })
            mybuttoncolor("Enable light mode");

        }
        else {

            setColor({

                color: "black",
                background: "white"
            })
            mybuttoncolor("Enable dark mode");

        }
    }

    return (
        <>  

            {/* making object for the style as in react */}
            <div></div>
            <div className='container-about' style={mycolor}>

                {/* <div className='container-about'> */}
                <h1>About Us</h1>

                <div className="accordion accordion-flush" id="accordionFlushExample" style={mycolor}>
                    <div className="accordion-item" style={mycolor}>
                        <h2 className="accordion-header">
                            <button style={mycolor} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mycolor}>
                        <h2 className="accordion-header">
                            <button style={mycolor} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mycolor}>
                        <h2 className="accordion-header">
                            <button style={mycolor} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>


                <div className="center">
                    <button type='button' className="btn-third" onClick={themestyle} >{mybutton}</button>
                </div>

            </div>
        </>
    )
}
