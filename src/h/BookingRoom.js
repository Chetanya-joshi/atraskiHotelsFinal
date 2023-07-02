import React,{useState} from 'react';
import {Container , Row , Col , Image , Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../components/LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';
import data from "./rooms.json"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// import { selectedDate } from './room1';

function BookingRoom(){
    
    

    const [mm, setMM] = useState(data);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.id == params.id);
   


    const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [selectedDate2, setSelectedDate2] = useState(getCurrentDate2());

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function getCurrentDate2() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function arrivalDateChange(events) {
    setSelectedDate(events.target.value);
  }

  function departureDateChange(events) {
    setSelectedDate2(events.target.value);
  }

  const [adults, setAdults] = useState(1);

  function Increment() {
    setAdults(adults + 1);
  }

  function Decrement() {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  }

    

    return(
        <>
            <Header/>

            {
              mm1.map((data)=>{
                return(
                  <>
                  <Container className='my-5'>
                <Col md={8}>
                    <div className="Container">
                        <h2 style={{borderBottom:'1px solid black'}}>Cart Details</h2>


                        <p>Check In Date: {selectedDate}</p>
                        <p>Check Out Date:</p>
                        <p>Adults</p>
                        <p>Total Price</p>


                        <Container>
                            <Button >Add To Cart</Button>
                        </Container>

                        
                    </div>
                </Col>

                <Col md={4}>
                  <Card>
                    <Card.Header as="h5">{data.charges}</Card.Header>
                    <Card.Body>
                      <Card.Title>Booking</Card.Title>
                      <Card.Text>
                        <form>
                          <label htmlFor="check-in" className="mt-4" style={{ marginRight: '5%', fontSize: '1.2rem' }}>
                            Check-in
                          </label>
                          
                          <input type="date" name="check-in" value={selectedDate} onChange={arrivalDateChange} />
                          

                          <label htmlFor="check-out" className="mt-4" style={{ fontSize: '1.2rem', marginRight: '4%' }}>
                            Check-out
                          </label>
                          <input type="date" name="check-out" value={selectedDate2} onChange={departureDateChange} />

                          <div className="Container mt-3">
                            <span style={{ marginRight: '4%', fontSize: '1.2rem' }}>Adults</span>
                            <Button style={{ marginRight: '4%' }} onClick={Decrement}>
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{adults}</span>
                            <Button style={{ marginRight: '4%' }} onClick={Increment}>
                              +
                            </Button>
                          </div>
                        </form>
                      </Card.Text>
                     
                    </Card.Body>
                  </Card>
                </Col>
            </Container>
                  </>
                )
              })
            }


            
        <Footer/>
        </>
    )
}

export default BookingRoom;
































