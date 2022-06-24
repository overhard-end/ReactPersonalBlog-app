import { Profile } from './components/profile';
import { Post } from './components/post';
import { HomePage } from './pages/homePage';

const Rou = {
  '/': () => <HomePage />,
  '/profile': () => <Profile />,
  '/post': () => <Post />,
};
export default Rou;
