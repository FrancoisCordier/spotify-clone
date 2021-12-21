import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "streaming",
  "user-top-read",
  "user-follow-read",
].join(",");

const params = { scope: scopes };

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
export { LOGIN_URL };
