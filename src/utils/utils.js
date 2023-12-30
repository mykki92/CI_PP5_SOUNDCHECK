import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

/*
  Renders and updates different types of data for the InfiniteScroll component
  Sends a request to the next page of results
*/
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

/*
  Increment the number of followers of profile clicked by 1
  Increment the number of following users by 1
*/
export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? 
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? 
      { ...profile, following_count: profile.following_count + 1 }
    : profile;
};

/*
  Decrement the number of followers of profile clicked by 1
  Decrement the number of following users by 1
*/
export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? 
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ?
      { ...profile, following_count: profile.following_count - 1 }
    : profile;
};

/*
  Sets a token timestamp in the browser storage
  Accepts the data object returned by the API on login
*/
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

/*
  Indicates if users token should be refreshed or not
  Returns the refreshTokenTimestamp value from our local storage
  Token will be refreshed only for a logged in user
*/
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

/*
  Remove the value from the local storage if the user logs out
  or their refresh token has expired
*/
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};