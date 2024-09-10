import React, { useState, useEffect } from 'react';
import '../Style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API = "https://mancuso.ai/wp-json/v1/portfolios";

function Portfolio() {    
  function App() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filterOptions, setFilterOptions] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all'); // Track the active category
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(API);
          const allPosts = response.data;
  
          const allCategories = allPosts.flatMap(post => post.categories);
          const uniqueCategories = ['all', ...new Set(allCategories)];
          setFilterOptions(uniqueCategories);
  
          setPosts(allPosts);
          setFilteredPosts(allPosts);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchPosts();
    }, []);
  
    // Function to filter posts based on a category
    const filterPosts = (category) => {
      setActiveCategory(category); // Update active category when selected
      if (category === 'all') {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter(post => post.categories.includes(category));
        setFilteredPosts(filtered);
      }
    };
  
    return (
      <div className="pt-4 bg-white section_padding">
        <div className='d-flex justify-content-end gap-2'>
          {filterOptions.map((category) => (
            <button 
              className={`text-capitalize ${activeCategory === category ? 'active' : ''}`} // Conditionally add active class
              key={category} 
              onClick={() => filterPosts(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className='d-flex flex-wrap' style={{ marginTop: '30px' }}>
  {filteredPosts.length > 0 ? (
    filteredPosts.map((post) => (
      <Link
        key={post.id}
        to={`/portfolio/${post.id}`}
        style={{ textDecoration: 'none' }}
        className='portfolio_card'
      >
        <div className='image-container' style={{ position: 'relative', width: '287px' }}>
          <img
            src={post.featured_image}
            alt={post.title}
            style={{ width: '287px', height: 'auto', maxWidth: '100%' }}
          />
          <div className='overlay-text' style={{
            position: 'absolute',
            margin:'10px',
            padding:'10px',
            top: '0',
            left: '0',
            backgroundColor: '#fff',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '0',
            transition: 'opacity 0.3s ease',
          }}>
            <p>{post.title}</p>
          </div>
          <div className='overlay-text-2' style={{
            position: 'absolute',
            margin:'10px',
            padding:'0px 4px',
            bottom: '0',
            left: '0',
            backgroundColor: '#fff',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '0',
            transition: 'opacity 0.3s ease',
          }}>
          <p>{post.categories.join(', ')}</p>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <p>Loading...</p>
  )}
</div>

      </div>
    );
  }

  return (
    <div className='main_Content'>
      <section className='portfolio_section section_padding py-5 bg-white'>
        <h2 className='section-title text-start'>Portfolio</h2>
        <h5 className="section-description text-end">My Works</h5>
      </section>
      <section className='portfolio_content bg-white'>
      </section>
      {App()}
    </div>
  );
}

export default Portfolio;
