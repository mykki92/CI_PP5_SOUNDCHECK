import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing-page-image.jpg";
import styles from "../styles/LandingPage.module.css";
import appStyles from "../App.module.css";

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
                <img
                  src={landingImage}
                  className={styles.LandingImage}
                  alt="landing page image"
                />
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
                <Link to="/signin">
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