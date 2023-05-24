import { useState } from "react"
import api,{add_product,get_product} from "../../Api/api"
import { useNavigate } from "react-router-dom";
import { Button,Form,Modal,InputGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.scss'
import {BsFillPlusSquareFill,BsFillTrashFill} from 'react-icons/bs'
import { useStateContext } from '../../Context/StateContext'


export default function Forms() {
  const {deleteAllProduct} = useStateContext()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const [dataForm, setdataForm] = useState({})
    const formChange = e =>{
        if(e.target.type === 'file'){
            return setdataForm({...dataForm,[e.target.name]:e.target.files[0]})
        }
        setdataForm({...dataForm,[e.target.name]:e.target.value})
    }
     function send(e){
        console.log(dataForm)
        e.preventDefault()
        add_product(dataForm,{  'Content-Type': 'multipart/form-data'}).then(response=>{
            console.log(response.data)
            navigate('/discover')
        }).catch(err=>{
            console.log('product not added')
        })

      }
    return (
        <div className="app__form">
          <div className="buttons__">
                <Button className="form_buttons form_buttons-left" variant="primary" onClick={handleShow}>
                  Add A Listing
                  <BsFillPlusSquareFill/> 
                </Button>

                <Button className="form_buttons form_buttons-right" variant="danger" onClick={deleteAllProduct}>
                  Delete All
                  <BsFillTrashFill/> 
                </Button>
          </div>

      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='form_title' >Adding A Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={send} encType="multipart/form-data" >
            <Form.Group controlId="formBasicText1">
              <Form.Label className='form_label'>Hotel Name</Form.Label>
              <Form.Control className='form_input' onChange={formChange} name='title' type="text" placeholder="Enter Hotel Name" />
            </Form.Group>

            <Form.Group controlId="formBasicText2">
              <Form.Label className='form_label'>Hotel Description</Form.Label>
              <Form.Control className='form_input' onChange={formChange} name="description" type="text" placeholder="Enter Hotel Description" />
            </Form.Group>
            
        <Form.Label className='form_label'>Price</Form.Label>
      <InputGroup size="md" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">$</InputGroup.Text>
        <Form.Control className='form_input' onChange={formChange} type="number" name="price" placeholder="Enter Number Input" />
        {/* <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        /> */}
      </InputGroup>

            {/* <Form.Group controlId="formBasicNumber">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            </Form.Group> */}

            <Form.Group controlId="formBasicFile">
              <Form.Label className='form_label'>Hotel Images</Form.Label>
              <Form.Control className='form_input' onChange={formChange} name="image" type="file" placeholder="Choose Image" />
            </Form.Group>
        <Modal.Footer>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Save Changes 
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
        </div>
    )
}