import VideoItem from './VideoItem';
import style from './VideoList.module.css';
const VideoList = ({ title, playList }) => {
	return (
		<div className={style.container}>
			<h2>{title}</h2>
			{playList.map((item, pos) => (
				<VideoItem key={pos} {...item} />
			))}
		</div>
	);
};
export default VideoList;
