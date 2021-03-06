import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import TransitionLink from "gatsby-plugin-transition-link"

import Countdown from './countdown'

import styles from '../styles/intro.css'

export default function Intro() {

  return (
    <>
    <div className="intro-wrapper">
      <div className="intro-child" >
        <Fade fraction={0.9} duration={2000}><h2 className="intro">50 mineral elements are used in 98% of all electronic devices, from consumer cell phones to computers, from  solar panels to electric cars.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">As we head towards an ever more digital future, we are becoming increasingly dependent on extractive and global processes to support it.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">For many of us, the electronic supply chain is characterised by its seamlessness and abstraction. Think: ‘one-click ordering’ or ‘next day delivery’.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">Yet, these processes invariably depend on labour that is often tedious and slow, and carried out under precarious and hazardous conditions.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">While many journalists have reported on supply chain working conditions, they sometimes end up reproducing the dominant narratives surrounding these processes.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">Such narratives center the consumer of a marketed end product, forgetting that the electronic supply chain doesn’t stop with the consumer at all...</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">...but continues on into recycling centers, with salvagers, and at e-waste sites around the world...</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">...Reminding us that words like ‘end consumer’ and ‘end product’ are situated, and offer only a partial perspective of consumer technology life cycles.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">They beg the questions: end consumer <i>of what</i> and end product <i>for whom</i>?</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">supply-chains.us is a living archive that traces these uneven geographies, extractive processes, and forgotten labour involved in the production of our digital life.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">This project is updated on a regular basis, and is best viewed from a desktop computer.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro"><Link to="/exhibit">Explore the supply chain</Link></h2></Fade>
      </div>
    </div>
    </>
  );
}

// export default Intro
