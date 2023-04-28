import React from 'react'
import { Form, Button } from 'react-bootstrap';

const FormLupaPassword = () => {
  return (
    <Form>
                      <Form.Group className="field input-field">
                        <Form.Control className="form-control" type="text" placeholder="Nama Admin" name="namaAdmin" required />
                        <Form.Control className="form-control" type="password" placeholder="Password" name="password" required />
                        <Form.Control className="form-control" type="password" placeholder="Konfirmasi Password" name="konfirmasiPassword" required />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" name="simpan" size="lg">
                          Simpan
                        </Button>
                      </div>
                      <center><Form.Label className="text forgetPassword-text" htmlFor="flip">Kembali ke masuk</Form.Label></center>
                    </Form>
  )
}

export default FormLupaPassword
