import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  // Step 5: loadPosts function
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.map(
          (item) => new Post(item.id, item.title, item.body)
        );
        this.setState({ posts });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        alert("Error loading posts");
      });
  }

  // Step 6: componentDidMount to call loadPosts
  componentDidMount() {
    this.loadPosts();
  }

  // Step 7: Error handling with componentDidCatch
  componentDidCatch(error, info) {
    alert("Something went wrong in the component.");
    console.error("Error caught in component:", error, info);
  }

  // Step 8: Render posts
  render() {
    return (
      <div>
        <h2>All Posts</h2>
        {this.state.posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
