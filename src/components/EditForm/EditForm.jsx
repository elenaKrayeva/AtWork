import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, resetUser, setError, updateUserData } from '../../features/userEditSlice';
import { Loader } from '../Loader/Loader';
import { Popup } from '../Popup/Popup';
import styles from './EditForm.module.scss';
import ClearIcon from '@assets/icons/cross.svg?react';

export const EditForm = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.userEdit);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    phone: '',
    companyName: '',
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await dispatch(fetchUserById(userId)).unwrap();
        setFormData({
          name: fetchedUser.name,
          username: fetchedUser.username,
          email: fetchedUser.email,
          city: fetchedUser.address.city,
          phone: fetchedUser.phone,
          companyName: fetchedUser.company.name,
        });
      } catch (err) {
        dispatch(setError(err.message || 'Ошибка при загрузке пользователя'));
      }
    };

    fetchUser();

    return () => {
      dispatch(resetUser());
    };
  }, [dispatch, userId]);

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = (name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: '',
    }));
  };

  const handleFocus = (name) => {
    setFocusedInput(name);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserData(formData));
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderInput = (label, name, type = 'text') => (
    <div>
      <label>{label}</label>
      <div className={styles.inputContainer}>
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => handleFocus(name)}
          onBlur={handleBlur}
          required
          className={styles.formInput}
        />
        {focusedInput === name && formData[name] && (
          <button type="button" className={styles.clearButton} onClick={() => handleClear(name)}>
            <ClearIcon className={styles.clearIcon} width="24px" height="24px" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        {renderInput('Имя', 'name')}
        {renderInput('Никнейм', 'username')}
        {renderInput('Почта', 'email', 'email')}
        {renderInput('Город', 'city')}
        {renderInput('Телефон', 'phone', 'tel')}
        {renderInput('Название компании', 'companyName')}

        <button type="submit" className={styles.btn}>
          Сохранить
        </button>
      </form>
      {showPopup && <Popup message="Изменения сохранены!" onClose={closePopup} />}
    </>
  );
};
