/** @module Hooks */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser } from 'redux/user/actions/user';
import { ENDPOINT_GETLOGGED } from 'services/settings';
import { makeGET } from 'services/httpRequest';
import { getToken } from 'services/tokenHandler';
/**
 * useUser Hook - Hooks to fetching data from api or get data from redux. Only for this proyect.
 * @async
 * @function useUser
 * @example
 * const { isAdmin, isLogged, loading, data } = useUser(); // You choose what you need.
 *
 * if (loading) {
 *   return <h4>LOADING</h4>
 * };
 *
 * console.log(isAdmin); // return true o false, if user have right role id.
 * console.log(isLogged); // return true o false, if user have id and email in your data.
 * console.log(data); // return a object like next.
 * // data:
 * //   createdAt: "2021-07-15T21:11:35.768Z"
 * //   deletedAt: null
 * //   email: "test@gmail.com"
 * //   firstName: "test"
 * //   id: 2
 * //   image: null
 * //   lastName: "test"
 * //   roleId: 2
 * //   updatedAt: "2021-07-15T21:11:35.768Z"
 */
const useUser = () => {
  // States
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState(null);
  // Redux.
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  /* useEffect if we don't have a user in redux.
  // If a fake cache, to avoid new request get.
  */
  useEffect(() => {
    const fetchData = async () => {
      const res = await makeGET(ENDPOINT_GETLOGGED);
      // Dispatch user to redux.
      if (!res?.status && !res.info) dispatch(getLoggedUser(res));
      setLoading(false);
    };
    // Execute effect only we don't have a user in redux.
    if (!user && getToken()) fetchData();
  }, [dispatch, user]);
  /*
  // useEffect to set data.
  */
  useEffect(() => {
    // Check if user is admin.
    if (user?.roleId === 1) setIsAdmin(true);
    // Check if user is logged.
    if (user?.id) {
      setIsLogged(true);
      setData(user);
    }
    setLoading(false);
  }, [user]);
  // return object to use.
  return { isAdmin, isLogged, data, loading };
};

export default useUser;
