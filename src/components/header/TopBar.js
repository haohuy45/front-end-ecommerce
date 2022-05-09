import React from 'react'
import { BsFillTelephoneFill, BsSearch, BsArrowRepeat, BsHandbag } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaCarSide } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const TopBar = () => {
  return (
    <div className='top-bar'>
        <Container>
          <Row className='d-flex align-items-center'>
            <Col xs={4}>
              <div className='header-contact-box'>
                <ul className='mb-0 p-0'>
                  <li className='phone'>
                    <BsFillTelephoneFill />
                    <span>0326114461</span>
                  </li>
                  <li className='email'>
                    <AiOutlineMail />
                    <span>haohuy45@gmail.com</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={8}>
              <div className='top-bar-right'>
                <ul className='mb-0 p-0'>
                  <li className='store-location'>
                    <GoLocation />
                    <span>Tìm cửa hàng</span>
                  </li>
                  <li className='order'>
                    <FaCarSide />
                    <span>Tra cứu đơn hàng</span>
                  </li>
                  <li className='customer-account d-flex align-items-center'>
                    <AiOutlineUser />
                    <a href='/'>
                      Register
                    </a>
                    <span>or</span>
                    <a href='/'>Sign in</a>
                  </li>
                </ul>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
  )
}

export default TopBar