import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#042743'
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2 className="my-3">About Us</h2>
            <div id="accordion" style={myStyle}>
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" style={myStyle} aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                            copying the test, clearing the text and what not.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Use</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" style={myStyle} aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            TextUtils is a free character counter tool that provides instant character count and word
                            count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character 
                            limit.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" style={myStyle} aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            This word counter software works in any browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                            suits to count characters in facebook, blogs, books, excel document, pdf document, essasy, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//export default About;