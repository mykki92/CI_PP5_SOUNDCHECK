import React from "react";
import NotFound from "../assets/404.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "../styles/PageNotFound.module.css";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";

/*
  Displays a 404 page customised graphic
  and a link to return to the main page
*/
const PageNotFound = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={12}>
        <Container className={appStyles.Content}>
          <Image className={styles.Image} src={NotFound} alt="Page not found image" />
          <h5 className="my-3">This page has not been found</h5>

          <Link to="/">
            <Button className={styles.HomeButton} my-3>
              Home
            </Button>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default PageNotFound;