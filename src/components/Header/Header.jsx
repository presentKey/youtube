import React, { useState } from 'react';
import { ImYoutube } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSumbit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    navigate(`/videos/${text}`);
  };

  return (
    <header>
      <div>
        <Link to="/">
          <ImYoutube />
          Youtube
        </Link>
      </div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button>
          <BiSearch />
        </button>
      </form>
    </header>
  );
}
