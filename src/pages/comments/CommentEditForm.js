import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments, setShowAlert } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_on: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
      setShowAlert(true);
    } catch (err) {
      //console.log(err)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
      <Button
          className={styles.Button}
          onClick={() => {
            setShowEditForm(false);
            setShowAlert(false);
          }}
          onMouseDown={(e) => e.preventDefault()}
          type="button"
        >
          cancel
        </Button>
        <Button
          className={styles.Button}
          disabled={!content.trim()}
          onMouseDown={(e) => e.preventDefault()}
          type="submit"
        >
          save
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;