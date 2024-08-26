"use client";
import {useState, useEffect} from "react";
import PromptCard from "./PromptCard";

  const PromptCardList = ({data, handleTagclick}) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagclick = {handleTagclick}
          />
        ))}
      </div>
    );
  };

const Feed = () => {

  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearch= (e)=>{
    
  }

  useEffect(()=>{
    const fetchPost = async ()=>{
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }

    fetchPost();
  },[])
  
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          className="search_input peer:"
          value={searchText}
          onChange={handleSearch}
          required
        />
      </form>

      {/* Prompt Card Component */}
      <PromptCardList data={posts}
      handleTagclick = {()=>{}}/>
    </section>
  );
};

export default Feed;
