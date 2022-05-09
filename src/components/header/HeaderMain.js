import React from 'react'
import { BsFillTelephoneFill, BsSearch, BsArrowRepeat, BsHandbag } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaCarSide } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const HeaderMain = () => {
  return (
    <div className='header-main'>
        <Container>
          <Row className='d-flex align-items-center'>
            <Col xl={2}>
              <div className='header-logo'>Logo</div>
            </Col>
            <Col xl={8} className='d-flex justify-content-center'>
              <div className='header-search'>
                <div className='search-box'>
                  <input type='text' placeholder='Tìm kiếm' />
                  <button className='search-btn'><BsSearch className='search-btn-icon' /></button>
                </div>
              </div>
            </Col>
            <Col xl={2}>
              <div className='header-icons'>
                <ul className='mb-0 p-0'>
                  <li className='compare'>
                    <BsArrowRepeat className='header-icon-item' />
                  </li>
                  <li className='wishlist'>
                    <AiOutlineHeart className='header-icon-item' />
                  </li>
                  <li className='cart'>
                    <BsHandbag className='header-icon-item' />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>


        </Container>
      </div>
  )
}

export default HeaderMain