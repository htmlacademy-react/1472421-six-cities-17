import MainScreen from '../pages/main-screen/main-screen';

type AppProps = {
  citiesCount: number;
}

function App({citiesCount}: AppProps): JSX.Element {

  return (<MainScreen citiesCount={citiesCount}/>);
}

export default App;

