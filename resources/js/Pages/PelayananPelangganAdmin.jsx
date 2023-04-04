import React from 'react'
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css';
import Logo2 from '../../../public/Assets/Images/Logo2.png'

const PelayananPelangganAdmin = () => {
  return (
    <div>
      <SidebarAdmin/>
      <section id="content">
      <NavbarAdmin />
      <main>
      <h1 className="title">Pelayanan Pelanggan</h1>
			<ul className="breadcrumbs">
				<li><a href="dashboard.php">Home</a></li>
				<li className="divider">/</li>
                <li><a href="#" className="active">Bantuan</a></li>
                <li className="divider">/</li>
				<li><a href="#" className="active">Pelayanan Pelanggan</a></li>
			</ul>
			<div className="card shadow">
					<h4 className="card-header text-bg-primary mb-3 fw-semibold"><center>Pelayanan Pelanggan
					</center></h4>
						<div className="card-body">
						<center>
							<img src={Logo2} style={{width: '250px',}} alt="" />
						</center>
						<br/>
						<div className="text">
						<center>
      					<div className="topic">Jika mengalami kendala selama penggunaan aplikasi, anda dapat menghubungi beberapa Pelayanan Pelanggan berikut :</div>
    					
						</center>
						<br/>
						<center>
						<table className="table2">
						<thead>
							<th><i className='bx bxl-instagram icon'></i>&nbsp;&nbsp;Instagram</th>
							<th><i className='bx bxl-whatsapp icon'></i>&nbsp;&nbsp;WhatsApp</th>
							<th><i className='bx bx-envelope icon'></i>&nbsp;&nbsp;Email</th>
						</thead>
						<tbody>
						<tr>
							<td>@ilhamikhwann</td>
							<td>+62 856 4954 9458</td>
							<td>ilhamikhwaan@gmail.com</td>
						</tr>
                        </tbody>
						</table>
					
					</center>	
					<br/>
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

export default PelayananPelangganAdmin
