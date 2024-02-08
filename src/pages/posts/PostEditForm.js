import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    caption: "",
    tags: "",
    post_image: "",
  });
  const { caption, tags, post_image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  /*
    Handles API request using the post id parameter
    Gets data for the posts user wants to edit
    Prevents editing other users posts
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { caption, tags, post_image, is_owner } = data;

        is_owner ? setPostData({ caption, tags, post_image }) : history.push("/");
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  /* 
    Handles changes to the input fields
  */
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
    Handles change to the image upload input field
  */
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(post_image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /* 
    Handles edit post form submission
    Redirects the user to the post page
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("caption", caption);
    formData.append("tags", tags);
    formData.append("post_image", imageInput.current.files[0]);

    if (imageInput?.current?.files[0]) {
        formData.append("post_image", imageInput.current.files[0]);
      }
  
      try {
        await axiosReq.put(`/posts/${id}/`, formData);
        history.push(`/posts/${id}`);
      } catch (err) {
        // console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Tags</Form.Label>
        <Form.Control
          type="text"
          name="tags"
          value={tags}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.tags?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Black}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Black}`} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={post_image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Black} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;