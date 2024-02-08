import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import PasswordForm from "./pages/profiles/PasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      {!currentUser ? (
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route render={() => <LandingPage />} />
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found, adjust your search" />
            )} 
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found, adjust your search or follow more accounts"
                filter={`owner__followed__owner__profile=${profile_id}&`} 
              />
            )} 
          />
          <Route
            exact
            path="/checked"
            render={() => (
              <PostsPage
                message="No results found, adjust your search or check more posts"
                filter={`checks__owner__profile=${profile_id}&ordering=-checks__created_at&`} 
              />
            )} 
          />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <PasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <PageNotFound />} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      )}
      </Container>
    </div>
  );
}

export default App;