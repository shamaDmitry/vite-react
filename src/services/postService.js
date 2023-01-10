import { TYPICODE_API_URL } from "./api";

const getAllPosts = async () => {
  try {
    const res = await fetch(`${TYPICODE_API_URL}/posts`);
    const json = await res.json();
    return json;
  } catch (e) {
    alert('Error ', e);
  }
}

export {
  getAllPosts
}