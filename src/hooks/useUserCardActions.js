import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { archiveUser, hideUser, activateUser } from '../features/usersSlice';

export const useUserActions = (user) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleArchive = () => {
    dispatch(archiveUser(user.id));
    setIsDropdownOpen(false);
  };

  const handleHide = () => {
    dispatch(hideUser(user.id));
    setIsDropdownOpen(false);
  };

  const handleEdit = () => {
    navigate(`/edit/${user.id}`);
    setIsDropdownOpen(false);
  };

  const handleActivate = () => {
    dispatch(activateUser(user.id));
    setIsDropdownOpen(false);
  };

  return {
    isDropdownOpen,
    toggleDropdown,
    handleArchive,
    handleHide,
    handleEdit,
    handleActivate,
  };
};
