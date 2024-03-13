import VideoItem from './VideoItem';

/* eslint-disable react/prop-types */
const VideoList = ({ title, playList }) => {
	return (
		<div>
			<h2>{title}</h2>
			{playList.map((item, pos) => (
				<VideoItem key={pos} {...item} />
			))}
		</div>
	);
};
export default VideoList;
