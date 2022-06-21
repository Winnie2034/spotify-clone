export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //REMOVE after finished developing...
  // token:
  //   "BQDkNBo0ezd5WQxtQ7PvI9n3KwUM10vEa5TcfohELcmSWf_ZGEFsDDhjxT3mJSytBqq9vPSeHdIKpqI4OFiiqdcMGQKS9guv-9kXEUtaJ0nNWwcWkdhNpZXLNIciyBLCa6k6P3_t01phdQcKf1fbBvciCi7cQ_5v2tlq9lP0fgQPEjgcN3Wqm2-s6ebgtQVuaM4cEw",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
