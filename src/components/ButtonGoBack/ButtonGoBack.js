import { useHistory } from 'react-router';

export default function ButtonGoBack() {
  const history = useHistory();

  return (
    <button
      type="  button"
      onClick={() => {
        history.goBack();
      }}
    >
      Go back
    </button>
  );
}
