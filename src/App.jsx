import VideoList from './components/VideoList';
import { playListJava, playListNode } from './data/data';
// import './App.css';
const App = () => {
	return (
		<>
			<VideoList title='Curso Java' playList={playListJava} />
			<VideoList title='Curso NodeJs' playList={playListNode} />
		</>
	);
};

export default App;
