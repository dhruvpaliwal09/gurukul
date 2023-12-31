import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
// import User_dashboard from '../../components/User_dashboard';
const Htmlcssjs = () => {
  return (
    <>
    {/* <User_dashboard/> */}
      <div className='text-center py-5 mt-14 flex items-center justify-center'>
        {/* Yaha Iframe aayega */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zJSY8tbf_ys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='rounded shadow-lg ml-10 flex items-center justify-center'>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>Html CSS Javascript Tutorial
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>HTML, CSS, and JavaScript are the foundational technologies used to build and enhance websites and web applications.These three technologies work together seamlessly.HTML (Hypertext Markup Language) provides the structure and content of a web page.CSS (Cascading Style Sheets) is used to control the visual appearance and layout of web pages.JavaScript is a programming language that adds interactivity and dynamic behavior to web pages. It enables you to create interactive features such as form validation, image sliders, responsive menus, and more. HTML creates the structure and content of a web page, CSS adds styling and visual enhancements, and JavaScript adds interactivity and dynamic functionality.</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Htmlcssjs