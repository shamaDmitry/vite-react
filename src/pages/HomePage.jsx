import { useState, useRef, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { TYPICODE_API_URL } from '../services/api';
import Post from '../components/Post';
import { getAllPosts } from '../services/postService';

const HomePage = () => {
  const titleEl = useRef(null);
  const bodyEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getAllPosts().then(res => {
      setPosts(res);
      setIsLoading(false);
    });

    return () => { }
  }, []);

  const handleSubmit = (e) => {
    let title = titleEl.current?.value;
    let body = bodyEl.current?.value;

    fetch(`${TYPICODE_API_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        userId: 5,
        title,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setPosts(prevState => {
          return [
            ...prevState,
            json
          ]
        });

        titleEl.current.value = '';
        bodyEl.current.value = '';
      });
  }

  return (
    <div className="App">
      <h2>
        Create post
      </h2>

      <div>
        <label htmlFor="" style={{ display: 'block' }}>
          Title
        </label>
        <input type="text" ref={titleEl} />
      </div>

      <div>
        <label htmlFor="" style={{ display: 'block' }}>
          Body
        </label>
        <textarea ref={bodyEl}></textarea>
      </div>

      <button
        style={{ marginTop: 20 }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <hr />

      <h2>
        Posts
      </h2>

      <div style={{ textAlign: 'left' }}>
        {
          posts.map(post => {
            return (
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                isLoading={isLoading}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage;
