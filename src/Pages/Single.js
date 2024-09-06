import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API = "https://mancuso.ai/mancusov2/wp-json/v1/portfolios";

const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(API);
        const data = response.data;
        const singlePost = data.find(post => post.id === parseInt(id));
        if (singlePost) {
          setPost(singlePost);
          <h1>Fetched</h1>
        } else {
          console.error('Post not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading post details...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='main_Content'>
      <h1>{post.title}</h1>
      <div className='d-flex justify-content-center'>
        <div>
        <h3>Description</h3>
        {/* {post.post_meta && post.post_meta.length > 0 && (<p>{post.author.name}</p>)} */}
        <p>{post.post_meta.fw_options.portfolio_type.standard.pf_client}</p>
        <p>{post.post_meta.fw_options.portfolio_type.standard.pf_date}</p>
        <p dangerouslySetInnerHTML={{ __html: post.post_meta.fw_options.portfolio_type.standard.pf_description}}></p>
        <h3>Share</h3>
        </div>
        <div>
        <img src={post.featured_image} alt={post.title} style={{ width: '690px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default Single;
