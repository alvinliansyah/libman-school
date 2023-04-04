import React from 'react'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css';
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
				<div className="card shadow">
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Jumlah Buku Keseluruhan</p>
						</div>
					</div>
                    <br/>
					<span className="progress" data-value="100%"></span>
					<span className="label">bulan</span>
				</div>
				<div className="card shadow">
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Jumlah Buku Tersedia Di Perpustakaan</p>
						</div>
					</div>
					<span className="progress" data-value="100%"></span>
					<span className="label">bulan</span>
				</div>
				<div className="card shadow">
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Jumlah Buku Sedang Proses Peminjaman</p>
						</div>
					</div>
					<span className="progress" data-value="100%"></span>
					<span className="label">bulan</span>
				</div>
				<div className="card shadow">
					<div className="head">
						<div>
							<h2>000</h2>
							<p>Total Siswa</p>
						</div>
					</div>
                    <br/>
					<span className="progress" data-value="100%"></span>
					<span className="label">tahun</span>
				</div>
			</div>
            <br/>
            <div className="row">
  <div className="col-sm-6">
				<div className="card shadow" style={{height: '650px',}}>
					<h4 className="card-header text-bg-primary mb-3 fw-semibold"><center>Chart Buku
					</center></h4>
						<div className="card-body">
						
						</div>
						</div>
			</div>
			<div className="col-sm-6">
			<div className="card shadow" style={{height: '650px',}}>
					<h4 className="card-header text-bg-primary mb-3 fw-semibold"><center>Memerlukan Tindakan
					</center></h4>
						<div className="card-body">
						
					</div>
					</div>
					</div>
							
			</div>
            <br/>
			<footer>
			<center>
			<div className="text">
			<span>Dibuat Oleh <a href="#">Libman School</a> | &#169; 2023 Semua Hak Dilindungi Undang-Undang</span>
			</div>
			</center>
			</footer>
			<br/>
		</main>
      </section>
    </div>
  )
}

export default DashboardAdmin
