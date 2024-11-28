import { Link } from 'react-router-dom';


function ErrorScreen(): JSX.Element {
  return(
    <div className="page">
      <h1> 404 Not found</h1>
      <Link to = '/'>Back to main screen</Link>
    </div>
  );
}

export default ErrorScreen;
