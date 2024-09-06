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
      if (category === 'all') {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter(post => post.categories.includes(category));
        setFilteredPosts(filtered);
      }
    };
  
    return (
      <div className="pt-4">
        <div>
          {filterOptions.map((category) => (
            <button key={category} onClick={() => filterPosts(category)}>
              {category}
            </button>
          ))}
        </div>
        
        <div>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link key={post.id} to={`/portfolio/${post.id}`} style={{ textDecoration: 'none' }}>
                <div>
                  <img src={post.featured_image} alt={post.title} style={{ width: '287px', height: 'auto' }} />
                  <p>{post.title}</p>
                  <p>{post.categories.join(', ')}</p>
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
            <h5 class="section-description text-end">My Works</h5>
         </section>
         <section className='portfolio_content bg-white'>

         </section>
         {
            App()
         }
      </div>
   )
}

export default Portfolio
