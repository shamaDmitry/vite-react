import { TYPICODE_API_URL } from "./api";

const getAllPhotos = async () => {
  try {
    const res = await fetch(`${TYPICODE_API_URL}/photos`);
    const json = await res.json();
    return json;
  } catch (e) {
    alert('Error ', e);
  }
}

export {
  getAllPhotos
}