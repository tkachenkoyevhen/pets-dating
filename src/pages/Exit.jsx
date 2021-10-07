import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../store/modules/accountReducer';

export default function Exit () {
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logoutAction());
  }
  useEffect(() => {
    exit()
  })
  return (null)
}
