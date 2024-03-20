import style from './VideoItem.module.css';
import Views from './Views';
const VideoItem = props => {
	return (
		<div className={style.container}>
			<h2>{props.title}</h2>
			<span>{props.date}</span>
			<span>{props.duration}</span>
			<p>{props.description}</p>
			<Views />
		</div>
	);
};
export default VideoItem;
