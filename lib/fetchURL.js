export default function getFetchURL() {
  console.log(process.env.IS_DEVELOPMENT);

  if (process.env.IS_DEVELOPMENT) {
    return "http://localhost:3000";
  } else {
    return "https://www.safetube.eu";
  }
}
