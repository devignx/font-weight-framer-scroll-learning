import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';

const bloglistData = {
  "bloglist": [
    {
      "id": 1,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 1",
      "desc": "This is the description of blog post 1.",
      "link": "https://example.com/blog/post1"
    },
    {
      "id": 2,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 2",
      "desc": "This is the description of blog post 2.",
      "link": "https://example.com/blog/post2"
    },
    {
      "id": 3,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 3",
      "desc": "This is the description of blog post 3.",
      "link": "https://example.com/blog/post3"
    },
    {
      "id": 4,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 4",
      "desc": "This is the description of blog post 4.",
      "link": "https://example.com/blog/post4"
    },
    {
      "id": 5,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
    {
      "id": 6,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
    {
      "id": 7,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
    {
      "id": 8,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
    {
      "id": 9,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
    {
      "id": 10,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
    {
      "id": 11,
      "img": "https://picsum.photos/300/300",
      "title": "Blog Post 5",
      "desc": "This is the description of blog post 5.",
      "link": "https://example.com/blog/post5"
    },
  ]
}


const Home = () => {
  const [bloglist, setBloglist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBloglist(bloglistData.bloglist);
      } catch (error) {
        console.log('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-12 p-6 justify-center items-center'>
      <h1>Blog List</h1>
      <Pagination blogsPerPage={4} blogs={bloglist} />
    </div>
  );
};

export default Home;
