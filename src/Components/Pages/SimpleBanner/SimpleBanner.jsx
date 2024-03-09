import { useEffect } from "react";
import AOS from 'aos';

const SimpleBanner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
                <div className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
                    <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 ">

                        {/* text */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-once="false"
                            className="space-y-4 order-2 md:order-2">
                            <h1 className="text-2xl md:text-4xl "> We Build Apps That Get Trending On Appworld</h1>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
                                necessitatibus?
                            </p>
                            <div>
                                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                                    <li className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, dolorem.</li>

                                    <li className="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing.</li>

                                    <li className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, dolorem.</li>

                                    <li className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, dolorem.</li>
                                </ul>
                            </div>
                        </div>
                        {/* text */}

                        {/* image */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-once="false"
                            className="order-1 md:order-1">
                            <img className="mx-auto max-w-[400px] h-[300px] rounded" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd7OzcgALSzd2speVjQ9HM0MlOlQzvbC2VYZX21zrVcHCuZ3HF" alt="" />
                        </div>
                        {/* image */}


                    </div>
                </div>
            </section>
        </div>
    );
};

export default SimpleBanner;