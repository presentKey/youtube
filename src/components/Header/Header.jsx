import React, { useState } from 'react';
import { ImYoutube } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';

export default function Header() {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSumbit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
  };
  return (
    <header>
      <div>
        <ImYoutube />
        Youtube
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
