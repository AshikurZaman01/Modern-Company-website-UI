import heroImg from '../../../assets/undraw_real_time_sync_re_nky7.svg';
import Aos from 'aos';

const Hero = () => {
    return (
        <div className="min-h-screen flex gap-8 items-center bg-gradient-to-r from-violet-950 to-violet-900 pt-20">

            <section className="container flex flex-col items-center justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 dark:text-white space-y-5">

                    {/* text */}
                    <div className='flex flex-col items-center gap-4 md:items-start md:text-left md:justify-center space-y-4 order-2 md:order-1 mb-0'>
                        <h1 className='text-4xl'>We Build Apps That Get <span className='text-green-500'>Trending On</span> <span className='text-pink-700'>Appworld</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate, nostrum veritatis commodi distinctio debitis nam repudiandae vitae.</p>

                        <div className='flex gap-4'>
                            <button className='btn btn-sm capitalize btn-secondary'>Get Started</button>
                            <button className='btn btn-sm capitalize bg-transparent text-white hover:bg-purple-700'>Get Started</button>
                        </div>
                    </div>
                    {/* text */}

                    {/* image */}
                    <div className='mx-auto max-w-xs p-4 order-1 md:order-2'>
                        <img src={heroImg} alt="" className="mx-auto" />
                    </div>
                    {/* image */}

                </div>
            </section>

        </div>
    );
};

export default Hero;
