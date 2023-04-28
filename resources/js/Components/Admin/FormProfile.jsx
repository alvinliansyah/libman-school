import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import Avatar from "react-avatar-edit";
import profile from '../../../../public/Assets/Images/defaultPicture.jpg'

const FormProfile = () => {
    const [im, setim] = useState(null);
    const [pim, setpim] = useState(null);
    const customStyles = {
        content: {
          top: '50%',
          left: '60%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border:"0",
        },
      };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const onCrop = (i) =>{
        setim(i);
        setpim(i);
    }

    const onClose = () =>{
        closeModal();
        setpim(null);
    }

  return (
    <>
    <div>
    <div
    style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        justifyContent: "center",
        alignItems: "center",
    }}>
    <div 
    style={{
        cursor: "pointer",
        height: "300px",
        width: "300px",
        display: "flex",
    }}
    onClick={openModal}>
    <img 
    style={{
        width: "100%",
        borderRadius: "50%",
    }}
    src={im ? im : profile} />
    </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Avatar
            width={390}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
        />
      </Modal>
    </div>
    <div
    style={{
        position: "absolute",
        right: "20%",
        top: "20%",
        zIndex: "99",
    }}>
    {pim && <img src={pim} />}
    </div>
    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Kode Admin</Form.Label>
                        <Form.Control className="form-control" style={{height:"50px",}} type="text" placeholder="Kode Admin" name="kdAdmin" disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nama Admin</Form.Label>
                        <Form.Control className="form-control" style={{height:"50px",}} type="text" placeholder="Nama Admin"  name="namaAdmin" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="form-control" style={{height:"50px",}} type="password" placeholder="Password"  name="password" required />
                    </Form.Group>
                      <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" name="editAkun" size="lg">
                            Edit Akun
                        </Button>
                        <Button variant="danger" type="submit" name="hapusAkun" size="lg">
                            Hapus Akun
                        </Button>
                        </div>
                    </Form>

    </div>
    </>
  )
}

export default FormProfile
