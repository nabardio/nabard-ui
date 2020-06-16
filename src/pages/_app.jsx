import { Provider } from 'react-redux';
import 'semantic/dist/semantic.min.css';
import store from 'store/store';
import './styles.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
