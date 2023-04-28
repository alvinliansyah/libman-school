import React from 'react'
import { Card } from 'react-bootstrap';   
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css'
import FormProfile from '../Components/Admin/FormProfile';
import FooterAdmin from '../Components/Admin/FooterAdmin';

const Profile = () => {

  return (
    <div>
      <SidebarAdmin />
      <section id="content">
        <NavbarAdmin />
        <main>
        <h1 className="title">Profile</h1>
			<ul className="breadcrumbs">
				<li><a href="dashboard">Home</a></li>
				<li className="divider">/</li>
				<li><a href="#" className="active">Profile</a></li>
			</ul>
            <Card className="shadow">
			<Card.Header className="text-bg-primary mb-3 fw-semibold">
				<center>Profile</center>
			</Card.Header>
			<Card.Body>
				<FormProfile />
			</Card.Body>
			</Card>
      <br/>
      <FooterAdmin />
        </main>
      </section>
    </div>
  )
}

export default Profile
