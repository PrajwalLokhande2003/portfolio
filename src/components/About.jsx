/* eslint-disable no-useless-concat */
import React, { useState } from "react";

const About = () => {

  const[bg,setBg] = useState()
  const[bgCss,setBgCss] = useState()
  const[bgJs,setBgJs] = useState()
  const[bgReact,setBgReact] = useState()
  const[bgNode,setBgNode] = useState()
  const[bgExpress,setBgExpress] = useState()
  const[bgMongo,setBgMongo] = useState()
  const[val,setval] = useState(0)



  let i = 0;
  let speed = 190;
  const proFun = () => {

    setInterval(() => {
      if (i > 95) {
        clearInterval();
      } else {
        setBg(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">HTML</div>'

      }

    }, speed);

    setInterval(() => {
      if (i > 85) {
        clearInterval();
      } else {
        setBgCss(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3-css').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">CSS</div>'

      }

    }, speed);

    setInterval(() => {
      if (i > 85) {
        clearInterval();
      } else {
        setBgJs(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3-js').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">JS</div>'

      }

    }, speed);

    setInterval(() => {
      if (i > 85) {
        clearInterval();
      } else {
        setBgReact(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3-react').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">React.js</div>'

      }

    }, speed);

    setInterval(() => {
      if (i > 85) {
        clearInterval();
      } else {
        setBgNode(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3-node').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">Node.js</div>'

      }

    }, speed);

    setInterval(() => {
      if (i > 85) {
        clearInterval();
      } else {
        setBgExpress(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3-express').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">Express.js</div>'

      }

    }, speed);

    setInterval(() => {
      if (i > 85) {
        clearInterval();
      } else {
        setBgMongo(`conic-gradient(#00ffff ${i++}%,#7d7b7b 0)`)
        document.getElementById('pro-out3-mongo').innerHTML = i + '%' + '<br>' + '<div style="font-size: 1rem;text-align:center;">MongoDB</div>'

      }

    }, speed);

  }

  const effect = () => {
    if (window.scrollY > 400) {
      proFun()
    }
    if (window.outerWidth < 768) {
      if (document.documentElement.scrollTop > 200) {
        proFun()
      }
    }
  }

  window.addEventListener('scroll',()=>{
    
    if(window.scrollY >200 && val===0){
    effect()
    setval(1)
  }})
  

    
    
  
  
  

  return (
    <>
      <div className="Aboutme pb-0">
        <div className="heading">About Me</div>
        <div className={window.outerWidth > 780 ? 'divaboutme' : 'divaboutme w-100'}>
          <div className="paraboutme">
            <p className="p1">I'm a frontend and backend developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been search freelancing work for a few month now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
          </div>
          <div id="divforbutton"><a href="image/Resume.pdf" className="moreaboutme btn btn-lg btn-outline-info " download>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download w-5 h-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
          Download CV</a></div>
        </div>
      </div>
      <div className="myskill pb-10">
        <div className="heading">Skills</div>

        <div className={window.outerWidth > 780 ? 'progress-div' : 'progress-div p-0 pt-5'}>

          <div className="col-1">

            <div id="progress-bar">
              <div className="inner" id="inn" style={{background:bg}}>
                <div className="outer" id="pro-out">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="progress-bar-css">
              <div className="inner" id="inn-css" style={{background:bgCss}}>
                <div className="outer" id="pro-out-css">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3-css"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="progress-bar-js">
              <div className="inner" id="inn-js" style={{background:bgJs}}>
                <div className="outer" id="pro-out-js">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3-js"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="progress-bar-react">
              <div className="inner" id="inn-react" style={{background:bgReact}}>
                <div className="outer" id="pro-out-react">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3-react"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="progress-bar-node">
              <div className="inner" id="inn-node" style={{background:bgNode}}>
                <div className="outer" id="pro-out-node">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3-node"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="progress-bar-express">
              <div className="inner" id="inn-express" style={{background:bgExpress}}>
                <div className="outer" id="pro-out-express">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3-express"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="progress-bar-mongo">
              <div className="inner" id="inn-mongo" style={{background:bgMongo}}>
                <div className="outer" id="pro-out-mongo">
                  <div className="outer1">
                    <div className="outer2">
                      <div className="outer3" id="pro-out3-mongo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default About;