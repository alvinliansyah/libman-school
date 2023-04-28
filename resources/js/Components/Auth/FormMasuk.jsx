import React from 'react'
import { Form, Button } from 'react-bootstrap';

const FormMasuk = () => {
  return (
    <Form>
                      <Form.Group className="field input-field">
                        <Form.Control className="form-control" type="text" placeholder="Nama Admin"  name="namaAdmin" required />
                        <Form.Control className="form-control" type="password" placeholder="Password"  name="password" required />
                      </Form.Group>
                      <Form.Label className="text" htmlFor="flip">Lupa Password?</Form.Label>
                      <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" name="masuk" size="lg">
                          Masuk
                        </Button>
                      </div>
                    </Form>
  )
}

export default FormMasuk
