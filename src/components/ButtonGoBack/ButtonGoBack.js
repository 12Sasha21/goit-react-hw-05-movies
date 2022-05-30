import { useHistory, useLocation } from 'react-router';

export default function ButtonGoBack() {
  const history = useHistory();
  const location = useLocation();

  const goBackHandler = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <button type="button" onClick={goBackHandler}>
      Go back
    </button>
  );
}
