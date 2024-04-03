import VideoList from './components/VideoList';
import { playListJava, playListNode } from './data/data';
import style from './App.module.css';
import LifeCycle from './components/LifeCycle';
import FormControlado from './components/FormControlado';
const App = () => {
	return (
		<div className={style.container}>
			<VideoList title='Curso Java' playList={playListJava} />
			<VideoList title='Curso NodeJs' playList={playListNode} />
			<LifeCycle />
			<br />
			<FormControlado />
		</div>
	);
};

export default App;
