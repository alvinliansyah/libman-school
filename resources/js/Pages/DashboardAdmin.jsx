import React from 'react'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css';
import DoughnutChart from '../Components/Admin/DoughnutChart';
import FooterAdmin from '../Components/Admin/FooterAdmin';
const DashboardAdmin = () => {
    
  return (
    <div>
      <SidebarAdmin/>
      <section id="content">
      <NavbarAdmin />
      <main>
			<h1 className="title">Dashboard</h1>
			<ul className="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li className="divider">/</li>
				<li><a href="#" className="active">Dashboard</a></li>
			</ul>
			<div className="info-data">
			<Card className="shadow">
				<Card.Body>
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Jumlah Buku Keseluruhan</p>
						</div>
					</div>
					<br />
					<ProgressBar now={60} />
					<span className="label">bulan</span>
				</Card.Body>
			</Card>
			<Card className="shadow">
				<Card.Body>
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Jumlah Buku Tersedia Di Perpustakaan</p>
						</div>
					</div>
					<ProgressBar now={60} />
					<span className="label">bulan</span>
				</Card.Body>
			</Card>
			<Card className="shadow">
				<Card.Body>
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Jumlah Buku Sedang Proses Peminjaman</p>
						</div>
					</div>
					<ProgressBar now={60} />
					<span className="label">bulan</span>
				</Card.Body>
			</Card>
			<Card className="shadow">
				<Card.Body>
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Total Siswa</p>
						</div>
					</div>
					<br />
					<ProgressBar now={60} />
					<span className="label">tahun</span>
				</Card.Body>
			</Card>
		</div>
		<br/>
		<Row>
		<Col sm={6}>
			<Card className="shadow" style={{height: '650px'}}>
			<Card.Header className="text-bg-primary mb-3 fw-semibold">
				<center>Chart Buku</center>
			</Card.Header>
			<Card.Body>
				<DoughnutChart />
			</Card.Body>
			</Card>
		</Col>
		<Col sm={6}>
			<Card className="shadow" style={{height: '650px'}}>
			<Card.Header className="text-bg-primary mb-3 fw-semibold">
				<center>Memerlukan Tindakan</center>
			</Card.Header>
			<Card.Body>
				{/* content */}
			</Card.Body>
			</Card>
		</Col>
		</Row>
            <br/>
			<FooterAdmin />
		</main>
      </section>
    </div>
  )
}

export default DashboardAdmin
