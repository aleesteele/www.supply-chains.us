import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import ShipAudio from "../components/sounds/ship.mp3"
import styles from "../styles/exhibit.css"

export default function TransportTwo() {
  const [play, { stop, isPlaying }] = useSound(ShipAudio);

  return (
    <div className="exhibit-child transport-div"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
    }}>
      <HomeButton />

      <h1 className="exhibit-page-title raw-title">Transport & Shipping</h1>

      <Link to="/smelt-refine"><BackButton /></Link>
      <Link to="/manufacturing"><ForwardButton /></Link>
    </div>
  )

}
