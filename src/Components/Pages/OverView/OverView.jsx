import React from 'react';
import CountUp from 'react-countup';

const OverView = () => {
    return (
        <div className="container mx-auto mt-8 ">
            <div className="mx-auto w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white grid grid-cols-4 gap-4 p-4 rounded-lg shadow-lg divide-x divide-gray-300 md:max-w-[800px] -translate-y-10 md:-translate-y-16 relative">
                
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">
                        <CountUp end={240} suffix='+' />
                    </h1>
                    <p className="text-sm">Clients</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">
                        <CountUp end={70} suffix='+' />
                    </h1>
                    <p className="text-sm">Projects</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">
                        <CountUp end={254} suffix='k+' />
                    </h1>
                    <p className="text-sm">Subscribers</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">
                        <CountUp end={160527} suffix='+' />
                    </h1>
                    <p className="text-sm">Clients</p>
                </div>
            </div>
        </div >
    );
};

export default OverView;
