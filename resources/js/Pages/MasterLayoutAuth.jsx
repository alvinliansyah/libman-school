import React from 'react'
import '../../../public/Assets/Auth/MasterLayoutAuth.css'
import NavbarAuth from '../Components/Auth/NavbarAuth'
import BerandaAuth from './berandaAuth'
import PelayananPelangganAuth from './PelayananPelangganAuth'
import TentangAplikasiAuth from './TentangAplikasi'
import FooterAuth from '../Components/Auth/FooterAuth'

const masterLayoutAuth = () => {
  return (
    <div>
      <NavbarAuth />
      <BerandaAuth />
      <TentangAplikasiAuth />
      <PelayananPelangganAuth />
      <FooterAuth />
    </div>
  )
}

export default masterLayoutAuth
