import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function ErrorScreen(): JSX.Element {
  return(
    <div className="page">
      <Header />
      <h1> 404 Not found</h1>
      <Link to = '/'>Back to main screen</Link>
    </div>
  );
}

export default ErrorScreen;
