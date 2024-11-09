// import React from 'react'
// import { useState } from "react"

export const About = (props) => {

    // const [text, setText] = useState("Dark Mode")
    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "White"
    // })

    const myStyle = {

     
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"rgb(34 38 42)":"white"

    }
    // const toggleStyle = () => {
    //     if (myStyle.color == "black") {
    //         setmyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setText("Light Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setText("Dark Mode")
    //     }
    // }

    return (
        <>
           
            <div className="container py-2">
                  <h2 className={`text-${props.mode === "dark" ? "white" : "black"}`}>About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Anime Movies</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               "Spirited Away" follows Chihiro, a young girl trapped in a mysterious spirit world who must save her parents. In "Your Name," two high schoolers mysteriously swap bodies, forming a deep bond as they seek answers. In "Weathering with You," a boy meets a girl who can control the weather, leading to emotional challenges.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               <strong>Animes</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                 Anime is a distinctive style of animated film and television originating from Japan, characterized by colorful artwork, vibrant characters, and fantastical themes. It encompasses a wide range of genres, appealing to diverse audiences, from action and adventure to romance and slice-of-life.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Anime Series</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            "Naruto" follows a young ninja aspiring to become the strongest leader while navigating friendships and challenges. In "Attack on Titan," humanity battles against giant humanoid creatures threatening their survival.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
