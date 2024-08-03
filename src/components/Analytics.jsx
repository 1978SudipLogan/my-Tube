import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className='bg-blue-400 w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</p>
                    <p>
                        Our platform is dedicated to providing you with top-notch resources across
                        various domains to ensure your continuous growth and expertise. We've curated
                        a selection of expert tutorials, courses, and books to guide you through your
                        learning journey. Dive into detailed tutorials from industry leaders, explore
                        comprehensive courses, and gain insights from the experts themselves. Whether
                        you're a beginner or looking to refine your skills in web development, Ethical Hacking,
                        and Digital Marketing our expertly crafted content ensures you have
                        everything you need to become proficient. Start learning from the best and
                        achieve your goals with confidence.
                    </p>
                    <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;