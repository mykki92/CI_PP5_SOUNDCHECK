import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing-page-image.jpg";
import landingImageTwo from "../assets/landing-page-image-2.jpg";
import landingImageThree from "../assets/landing-page-image-3.jpg";
import styles from "../styles/LandingPage.module.css";
import appStyles from "../App.module.css";
import Carousel from 'react-bootstrap/Carousel'

/*
  Landing page with app description
*/
const LandingPage = () => {
  return (
    <>
      <Row className="text-center">
        <Col sm={12}>
          <Container>
            <Card className={styles.LandingCard}>
              <Card.Body>
                <Card.Text>
                  Soundcheck is an online community for musicians and music fans 
                  alike to share their content, discover new music and make new
                  friends!
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Body>
              <Carousel className={styles.Carousel} fade>
                <Carousel.Item>
                  <img
                    src={landingImageTwo}
                    className={styles.LandingImage}
                    alt="landing page image"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={landingImage}
                    className={styles.LandingImage}
                    alt="landing page image"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={landingImageThree}
                    className={styles.LandingImage}
                    alt="landing page image"
                  />
                </Carousel.Item>
              </Carousel>
              <br />
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  Sign up today and join the Soundcheck community!
                </Card.Text>
                <Link to="/signup">
                  <Button
                    className={`${appStyles.button} ${styles.LandingButton} mb-3`}
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className={`${appStyles.button} ${styles.LandingButton} mb-3`}>
                    Sign in
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;