import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/Pagination.css'

const Pagination = ({ blogsPerPage, blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const renderBlogs = currentBlogs.map((blog) => (
    <a href={blog.link} className='bg-yellow-100 hover:shadow-lg hover:scale-[102%] anim font-semibold w-11/12 md:w-fit p-3 flex flex-col gap-2 md:p-4 rounded-xl m-2 mx-auto md:m-4' key={blog.id}>
      <img className='object-cover w-full md:w-auto h-[13rem] rounded-lg drop-shadow-lg mx-auto md:mx-0' src={blog.img} alt={blog.title} />
      <h2 className='text-lg md:text-xl px-3 font-bold'>{blog.title}</h2>
      <p className='text-sm opacity-60 -mt-2 px-3'>{blog.desc}</p>
    </a>
  ));

  const pageNumbers = Math.ceil(blogs.length / blogsPerPage);

  const renderPageNumbers = () => {
    // Generate an array of page numbers
    const pageNumbersArray = [];
    for (let i = 1; i <= pageNumbers; i++) {
      pageNumbersArray.push(i);
    }
  

    return pageNumbersArray.map((number) => (
      <>
        <button
          key={number}
          id={number}
          onClick={handleClick}
          className={`${currentPage === number ? 'bg-yellow-400 ' : 'bg-yellow-500/20'} anim p-2 rounded-lg`}
        >
          {number}
        </button>
      </>
    ));
  };

  return (
    <div >
      <div className='flex flex-wrap text-xs gap-6 mt-6'>
      {renderBlogs}
      </div>
      <div className='flex w-fit text-xs mx-auto mt-8 items-center justify-center gap-6'>
        <button  className={` ${currentPage > 1 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none ' } anim`} onClick={ () => setCurrentPage(currentPage-1)} >←</button>
        <ul className={`mx-auto cursor-pointer w-fit flex gap-6 `}>{renderPageNumbers()}</ul>
        <button className={` ${currentPage < pageNumbers ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none ' } anim`} onClick={ () => setCurrentPage(currentPage+1)} >→</button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  blogsPerPage: PropTypes.number.isRequired,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Pagination;
