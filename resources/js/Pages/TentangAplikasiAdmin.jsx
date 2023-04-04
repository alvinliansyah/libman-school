import React from 'react'
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css';
import Logo2 from '../../../public/Assets/Images/Logo2.png'
const TentangAplikasiAdmin = () => {
  return (
    <div>
      <SidebarAdmin/>
      <section id="content">
      <NavbarAdmin />
      <main>
			<h1 className="title">Tentang Aplikasi</h1>
			<ul className="breadcrumbs">
				<li><a href="dashboard">Home</a></li>
				<li className="divider">/</li>
                <li><a href="#" className="active">Bantuan</a></li>
                <li className="divider">/</li>
				<li><a href="#" className="active">Tentang Aplikasi</a></li>
			</ul>
			<div className="card shadow">
					<h4 className="card-header text-bg-primary mb-3 fw-semibold"><center>Tentang Aplikasi
					</center></h4>
						<div className="card-body">
							<center>
							<img src={Logo2} style={{width: '250px',}} alt="" />
						</center>
						<br/>
						<div className="text">
						<p style={{textindent: '45px', fontsize: '14px',}}>Libman School merupakan sebuah aplikasi manajemen perpustakaan yang berfungsi untuk memudahkan penggunanya untuk mengatur segala aktivitas di dalam perpustakaan secara cepat dan efisien. Libman School berasal dari pengertian dari keseluruhan fungsi aplikasi ini, Kata awal “Lib” kami ambil dari kata “Library” yang berarti perpustakaan dan “Man” kami ambildari kata “Management” yang berarti pengelolaan. </p>
						<p style={{textindent: '45px', fontsize: '14px',}}>Aplikasi ini kami rancang dengan dua jenis versi yaitu mobile dan website, Keduanya memiliki fungsi berbeda namun saling melengkapi. Website digunakan oleh admin untuk melakukan manajemen dan mengolah data dalam perpustakaan, sedangkan Mobile diperuntukan untuk pengguna kalangan umum untuk melakukan transasksi peminjaman dan pengembalian buku.</p>
						<p style={{textindent: '45px', fontsize: '14px',}}>Selain fitur utama dalam website yang disebutkan di atas, kami juga menyediakan bebagai fitur yang dapat memudahkan dan mempercepat kineja admin dalam mengelola data seperti eksport dan import dari file PDF, Excel, Scan Barcode cerdas menggunakan kartu perpustakaan dalam melakukan Transaksi, Selain itu admin juga dapat mengedit database secara real time dengan mudah dan cepat.</p>
						<p style={{textindent: '45px', fontsize: '14px',}}>Dalam versi mobile juga memiliki berbagai fitur yang menarik dan mudah digunakan oleh pengguna, seperti fitur pemberithuan memerlukan tindakan yang berfungsi untuk memperlihatkan pengguna mengenai status batas waktu peminjaman agar pengguna tidak melewati batas peminjaman buku. Selain itu juga ada fitur tambah favorite yang berfungsi untuk menambahkan buku ke daftar favorite sebagai pengingat buku yang akan dipinjam di kemudian hari tanpa harus mencarinya kembali.</p>
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

export default TentangAplikasiAdmin
