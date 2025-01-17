import { useAppSelector } from '../../hooks/state/state-hooks';
import { getError } from '../../storage/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {

  const errorMessage = useAppSelector(getError);

  return (errorMessage)
    ? <div className='error-message'>{errorMessage}</div>
    : null;
}

export default ErrorMessage;
