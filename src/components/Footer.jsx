import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary text-white py-4'>
      <Container>
        <Row>
          <Col md={4} className='mb-4'>
            <h5>About TheShoes</h5>
            <p>At TheShoes, we're passionate about footwear and committed to providing you with the latest trends and the most comfortable styles. With a wide selection of shoes for every occasion, we aim to keep your feet both stylish and comfortable. Our team of dedicated experts handpicks the finest footwear, ensuring quality and fashion go hand in hand. Whether you're looking for the perfect pair of sneakers, elegant heels, or durable boots, we've got you covered. Discover the world of footwear with us and step into comfort and style today!</p>
          </Col>
          <Col md={4} className='mb-4'>
            <h5>Follow Us</h5>
            <ul className='list-unstyled social-icons'>
              <li>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png'
                    alt='Facebook'
                    style={{ width: '30px', height: '30px' }}
                  />
                </a>
              </li>
              <br />
              <li>
                <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-1024.png'
                    alt='Twitter'
                    style={{ width: '30px', height: '30px' }}
                  />
                </a>
              </li>
              <br />
              <li>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png'
                    alt='Instagram'
                    style={{ width: '30px', height: '30px' }} 
                  />
                </a>
              </li>
              <br />
              <li>
                <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png'
                    alt='LinkedIn'
                    style={{ width: '30px', height: '30px' }}
                  />
                </a>
              </li>
              <br />
              <li>
                <a href='https://www.whatsapp.com/' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-1024.png'
                    alt='Whatsapp'
                    style={{ width: '30px', height: '30px' }}
                  />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className='mb-4'>
            <h5>Contact Us</h5>
            <p>Email: info@theshoes.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St#23, Peshawar, Pakistan</p>
          </Col>
        </Row>
        <hr className='bg-light' />
        <Row>
          <Col className='text-center py-3'>
            <p>&copy; {currentYear} TheShoes. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
