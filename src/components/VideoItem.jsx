/* eslint-disable react/prop-types */
const VideoItem = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<span>{props.date}</span>
			<span>{props.duration}</span>
			<p>{props.description}</p>
		</div>
	);
};
export default VideoItem;
