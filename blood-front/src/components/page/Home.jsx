import React from 'react'
import { Link } from "react-router-dom";
import style from "../layout/style.module.css"
import image from "../img/new vector.jpg"

function Home() {

    const { herosec, left, right, btn1, btnmenu} = style

  return (
    <header>
        
        <div class={herosec}>
            <div class={left}>
                <h5>
                    Donate Blood Save Life!
                </h5>
                <h1>YOUR BLOOD <br/> CAN BRING SMILE <br/> IN OTHER PERSON FACE</h1>
                <div class={btnmenu}>
                    <div id="btn2" class={btn1}>
                        <li><Link to="/regester">Join as Blood Donor</Link></li>

                    </div>
                    <div id="btn3" class={btn1}>
                        <li><Link to="/search"> Search Blood Donors</Link></li>

                    </div>
                </div>
            </div>
            <div class={right}>
                {/* <img src={image} alt="donate"/> */}
            </div>


        </div>

    </header>
  )
}

export default Home