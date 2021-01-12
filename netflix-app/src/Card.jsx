import React from "react";
function Card(props) {
    return (<>
        <div>
            <div className="card" >

                <img alt="netflixImage" src={props.imgSrc} />


                <div className="card_title">

                    <span>{props.title}</span>
                    <h3>{props.name}</h3>
                    <a href={props.link} target="_blank" rel="noreferrer" >
                        <button>
                            Watch Now
                        </button>
                    </a>

                </div>

            </div>
        </div>   </>
    )
}
export default Card;