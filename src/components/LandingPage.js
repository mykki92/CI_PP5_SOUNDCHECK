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
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1 className="mb-4">Soundcheck - Join Up</h1>
                </Card.Title>
                <Card.Text className="font-weight-bold">
                  Placeholder text
                  <br />
                  <br />
                  Placeholder text
                </Card.Text>
              </Card.Body>
              <img
                src={landingImage}
                className={styles.LandingImage}
                alt="landing page image"
              />
              <Card.Body>
                <Link to="/signup">
                  <Button
                    className={`${appStyles.button} ${styles.LandingButton} mb-3`}
                  >
                    Happy to join!
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className={`${appStyles.button} mb-3`}>
                    I’m already a member, log me in!
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