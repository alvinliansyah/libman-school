import React from 'react'
import LogoSekolah from '../../../public/Assets/Images/logosmp1bangsal.png'
import FotoSekolah from '../../../public/Assets/Images/wander-fleur-1lmGTHdQdjM-unsplash.jpg'

const BerandaAuth = () => {
  return (
    <section className="beranda" id="beranda">
  <div className="beranda-content">
   <div className="menu">
   <div className="container">
           <input type="checkbox" id="flip" />
           <div className="cover" >
             <div className="front">
               <img className="frontImg" src={FotoSekolah}  alt="" />
               <img className="logoSekolah" src={LogoSekolah} style={{width: '90px', height: '90px', position: 'absolute', top: '140px', right: '160px', padding: 'none', borderRadius: '1px',}} alt="" />
               <div className="text">
                 <span className="text-1">APLIKASI MANAJEMEN PERPUSTAKAAN</span>
                 <span className="text-2">SMP Negeri 1 Bangsalsari</span>
               </div>
             </div>
             <div className="back">
               <img className="backImg" src={FotoSekolah} alt="" />
               <img className="logoSekolah" src={LogoSekolah}  style={{width: '90px', height: '90px', position: 'absolute', top: '140px', right: '160px', padding: 'none', borderRadius: '1px',}} alt="" />
               <div className="text">
                 <span className="text-1">APLIKASI MANAJEMEN PERPUSTAKAAN</span>
                 <span className="text-2">SMP Negeri 1 Bangsalsari</span>
               </div>
             </div>
           </div>
           <div className="forms">
               <div className="form-content">
                 <div className="auth-form">
                   <header>Masuk</header>
                   <br/>
               <p>Masukkan Nama Admin dan</p>
               <p>Password untuk melanjutkan ke halaman berikutnya</p>
                 <form method="post" action="#">
                 <div  class="field input-field">
                       <input type="text" class="form-control" style={{height: '50px',}} placeholder="Nama Admin" name ="namaAdmin" required />
                     </div>
                     <div  class="field input-field">
                       <input type="password" class="form-control" style={{height: '50px',}} placeholder="Password" name ="password" required />
                     </div>
                     <div className="text"><label for="flip">Lupa Password?</label></div>
                     <div class="button input-box">
                       <input type="submit" value="Masuk" />
                     </div>
                   </form>
                 </div>
                 <div className="forgetPassword-form">
                   <header>Lupa Password</header>
                   <br/>
                   <p>Silahkan masukkan Password baru anda</p>
                   <form action="#" method="POST">
                   <div class="field input-field">
                       <input type="text" class="form-control" style={{height: '50px',}} placeholder="Nama Admin" name="nama" required />
                     </div>
                     <div class="field input-field">
                       <input type="password" class="form-control" style={{height: '50px',}} placeholder="Password" name="password" required />
                     </div>
                     <div class="field input-field">
                       <input type="password" class="form-control" style={{height: '50px',}} placeholder="Konfirmasi password" name="konfirmasiPassword" required />
                     </div>
                   <div class="button input-box">
                       <input type="submit" value="Simpan" name="simpan" />
                     </div>
                     <div className="text forgetPassword-text"><label for="flip">Kembali ke masuk</label></div>
             </form>
           </div>
           </div>
    </div>
  </div>
  </div>
  </div>
</section>
  )
}

export default BerandaAuth
