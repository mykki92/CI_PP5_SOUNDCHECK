import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropdownMenu } from "../../components/DropdownMenu";
import FeedbackMessage from "../../components/FeedbackMessage";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    check_count,
    check_id,
    caption,
    tags,
    post_image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);

  /*
    Handles post editing
  */
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  /*
    Handles deleting posts
    Shows confirmation message to the user
    Redirects the user to the main page after a short delay
  */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      setShowAlert(true);
      setTimeout(function () {
        history.push("/");
      }, 1500);
    } catch (err) {
      // console.log(err);
    }
  };

  /*
    Handles post checks
    Sends a request to the API for a post by id
    Increments the checks number by 1
  */
  const handleCheck = async () => {
    try {
      const { data } = await axiosRes.post("/checks/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, check_count: post.check_count + 1, check_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  /*
    Handles post uncheck
    Sends a request to the API for a post by id
    Decrements the checks number by 1
  */
  const handleUncheck = async () => {
    try {
      await axiosRes.delete(`/checks/${check_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, check_count: post.check_count - 1, check_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      {showAlert && (
        <FeedbackMessage variant="info" message="Your post has been deleted" />
      )}
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={`/profiles/${profile_image}`} height={55} />
            {owner}
          </Link>
          {/* Displays the dropdown menu with options to edit or delete post */}
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <DropdownMenu
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={post_image} alt={caption} />
      </Link>
      <Card.Body>
        {caption && <Card.Title className="text-center">{caption}</Card.Title>}
        {tags && <Card.Text>{tags}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't check your own post!</Tooltip>}
            >
              <i className="fas fa-bolt" />
            </OverlayTrigger>
          ) : check_id ? (
            <span onClick={handleUncheck}>
              <i className={`fas fa-bolt ${styles.Bolt}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleCheck}>
              <i className={`fas fa-bolt ${styles.BoltOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to check posts!</Tooltip>}
            >
              <i className="fas fa-bolt" />
            </OverlayTrigger>
          )}
          {check_count}
          <Link to={`/posts/${id}`}>
            <i className="fas fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

const ProfilePost = (props) => {
  const {
    id,
    caption,
    post_image,
  } = props;

  return (
    <Card>
        <Link to={`/posts/${id}`}>
            <Card.Img className={styles.ProfilePost} src={post_image} alt={caption} />
        </Link> 
    </Card>
  );
}

export { Post, ProfilePost };