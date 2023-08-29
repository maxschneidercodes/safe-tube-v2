export default function getFetchURL() {
  if (process.env.IS_DEVELOPMENT) {
    return "http://localhost:3000";
  } else {
    return "https://www.safetube.eu";
  }
}
