import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { DropdownMenu } from "../../components/DropdownMenu";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";
import FeedbackMessage from "../../components/FeedbackMessage";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const [showAlert, setShowAlert] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  /*
    Handles deleting of the comment based on its id
    Displays feedback message to confirm comment deleted
    Decrements the number of comments by 1
  */
  const handleDelete = async () => {
    setIsDeleted(true);

    setTimeout(async () => {
      try {
        await axiosRes.delete(`/comments/${id}/`);
        setPost((prevPost) => ({
          results: [
            {
              ...prevPost.results[0],
              comments_count: prevPost.results[0].comments_count - 1,
            },
          ],
        }));

        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.filter((comment) => comment.id !== id),
        }));
      } catch (err) {
        //console.log(err)
      }
    }, 1500);
  }; 

  return isDeleted ? (
    <FeedbackMessage variant="info" message="Your comment has been deleted" />
  ) : (
    <div>
      {showAlert && (
        <FeedbackMessage variant="info" message="Your comment has been updated" />
      )}
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setComments={setComments}
            setShowEditForm={setShowEditForm}
            setShowAlert={setShowAlert}
          />
        ) : (
          <p>{content}</p>
        )}
        </Media.Body>
        {/* Displays dropdown menu with options to edit or delete comment */}
        {is_owner && !showEditForm && (
          <DropdownMenu
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Comment;