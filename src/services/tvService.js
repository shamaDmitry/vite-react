import { TV_API_URL } from "./api";

const getShowsByPageId = async (pageId = 0) => {
  try {
    const res = await fetch(`${TV_API_URL}/shows?page=${pageId}`);
    if(res.status === 200) return await res.json()

    return []
  } catch (e) {
    alert('Error ', e);
  }
}

export {
  getShowsByPageId
}