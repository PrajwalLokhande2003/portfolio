import React, {useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {

  const ref = useRef(null)
  const [active, setActive] = useState('line3')
  const [left, setLeft] = useState(false)

  

  return (
    <>
      <div className={window.innerWidth > 768 ? 'divnav ': 'divnav p-0 w-100'} ref={ref} >
        <ul className={window.innerWidth > 768 ? 'navbar' : 'navbar justify-content-start'}>
          <li style={{ padding: '1rem', background: 'none' }}>
            <div className="divimg">
              <img src="https://avatars.githubusercontent.com/u/104195092?v=4" alt="" className="myimg" />
            </div>
          </li>
          <li style={{ fontWeight: 300, background: 'none' }} >Prajwal Lokhande</li>
          {window.innerWidth > 768 ? <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Me</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
          </>
            : <>
              <li className=" m-auto w-auto bg-transparent position-absolute" onClick={() => {
                active === 'line3' ? setActive("active line3") : setActive("line3");
                setLeft(!left);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} overflow={'visible'} viewBox="0 0 21 15" className={active}>
                  <rect height="2" width="20" y="0" rx="1" ry="1" className="top-line"></rect>
                  <rect height="2" width="20" y="5" rx="1" ry="1" className="mid-line"></rect>
                  <rect height="2" width="20" y="10" rx="1" ry="1" className="bottom-line"></rect>
                </svg>
              </li>
            </>
          }
        </ul>
      </div>
      <div>
        <motion.div animate={{ x: left ? window.innerWidth/2 : window.innerWidth }} transition={{ type: "tween" }} initial={{ x: window.innerWidth }} className="res-nav-bar">
          <ul>
            <li > <Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Me</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
          </ul>
        </motion.div>
      </div>
    </>
  )
}

export default Nav;