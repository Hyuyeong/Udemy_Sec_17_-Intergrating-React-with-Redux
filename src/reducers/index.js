import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "acb",
      duration: "4:05",
    },
    {
      title: "dcdf",
      duration: "3:15",
    },
    {
      title: "adsfdsfds",
      duration: "5:45",
    },
    {
      title: "acdfb",
      duration: "2:11",
    },
  ];
};
const selctedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selctedSongReducer,
});
