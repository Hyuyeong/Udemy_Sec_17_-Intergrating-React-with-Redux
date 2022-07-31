import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  // console.log(props);

  const renderList = props.songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated conten">
          <button
            onClick={() => props.selectSong(song)}
            className="ui button primary"
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });

  return <div className="ui divided list"> {renderList}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
