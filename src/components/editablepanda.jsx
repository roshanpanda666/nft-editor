import React from "react";
import { useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Editablepanda = () => {
  const [glass, setglass] = useState();
  const[cap,setcap]=useState()
  const[sigar,setsigar]=useState()
  const[nodel,setnodels]=useState()
  return (
    <div>
        
      <div className="flex justify-center items-center flex-col">
        <img src="panda.jpg" alt="" className="scale-90" />
        {cap}
        {glass}
        {sigar}
        {nodel}
      </div>
    <div className="flex justify-center items-center">

    
        <AwesomeSlider animation="cubeAnimation" className="w-96 h-96 lg:w-full lg:-mt-8">
        <div>
        
        <div className="space-x-7 flex items-center justify-center">
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="blackglass.png"
                    alt=""
                    className="absolute scale-50 mb-40"
                    />
                );
                }}
            >
                <img src="blackglass.png" alt="" />
            </button>

            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="glasses.png"
                    alt=""
                    className="absolute scale-50 mb-64"
                    />
                );
                }}
            >
                <img src="glasses.png" alt="" />
            </button>
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="quest2.png"
                    alt=""
                    className="absolute scale-75 mb-60"
                    />
                );
                }}
            >
                <img src="quest2.png" alt="" />
            </button>

            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="futureglass.png"
                    alt=""
                    className="absolute scale-50 mb-48"
                    />
                );
                }}
            >
                <img src="futureglass.png" alt="" />
            </button>
            </div>

            {/* 2nd container */}
            <div className="space-x-7 flex items-center justify-center mt-4">
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="pglass.png"
                    alt=""
                    className="absolute scale-50 mb-80"
                    />
                );
                }}
            >
                <img src="pglass.png" alt="" />
            </button>

            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="uncleglass.png"
                    alt=""
                    className="absolute scale-50 mb-40"
                    />
                );
                }}
            >
                <img src="uncleglass.png" alt="" />
            </button>
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="eyeglass.png"
                    alt=""
                    className="absolute scale-75 mb-52"
                    />
                );
                }}
            >
                <img src="eyeglass.png" alt="" />
            </button>

            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="coolglass.png"
                    alt=""
                    className="absolute scale-75 mb-24"
                    />
                );
                }}
            >
                <img src="coolglass.png" alt="" />
            </button>
        </div>
      

      {/* 
        2nd glass container */}
      <div className="space-x-7 flex items-center justify-center mt-4">
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="simpleglass.png"
                    alt=""
                    className="absolute h-[90px] mb-56"
                    />
                );
                }}
            >
                <img src="simpleglass.png" alt="" />
            </button>

            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="smartboy.png"
                    alt=""
                    className="absolute scale-50 mb-64"
                    />
                );
                }}
            >
                <img src="smartboy.png" alt="" />
            </button>
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="jokerglass.png"
                    alt=""
                    className="absolute h-[120px] mb-48"
                    />
                );
                }}
            >
                <img src="jokerglass.png" alt="" />
            </button>

            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setglass(
                    <img
                    src="creepyeye.png"
                    alt=""
                    className="absolute scale-50 mb-48"
                    />
                );
                }}
            >
                <img src="creepyeye.png" alt="" />
            </button>
            </div>

           

        </div>
        <div>
            
            <div className="space-x-7 flex items-center justify-center">
                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setcap(
                        <img
                        src="ironmancap.png"
                        alt=""
                        className="absolute scale-75 mb-40"
                        />
                    );
                    }}
                >
                    <img src="ironmancap.png" alt="" />
                </button>
                <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setcap(
                    <img
                    src="armycap.png"
                    alt=""
                    className="absolute scale-50 mb-96"
                    />
                );
                }}
            >
                <img src="armycap.png" alt="" />
            </button>
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setcap(
                    <img
                    src="captaincap.png"
                    alt=""
                    className="absolute scale-50 mb-96"
                    />
                );
                }}
            >
                <img src="captaincap.png" alt="" />
            </button>
            <button
                className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                onClick={() => {
                setcap(
                    <img
                    src="kidcap.png"
                    alt=""
                    className="absolute scale-50 mb-96"
                    />
                );
                }}
            >
                <img src="kidcap.png" alt="" />
            </button>
            </div>
            <div className="space-x-7 flex items-center justify-center mt-4">
                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setcap(
                        <img
                        src="sportcap.png"
                        alt=""
                        className="absolute scale-75 mb-72"
                        />
                    );
                    }}
                >
                    <img src="sportcap.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300 "
                    onClick={() => {
                    setcap(
                        <img
                        src="redparacap.png"
                        alt=""
                        className="absolute scale-50 mb-96"
                        />
                    );
                    }}
                >
                    <img src="redparacap.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300 "
                    onClick={() => {
                    setcap(
                        <img
                        src="milatrycap.png"
                        alt=""
                        className="absolute scale-75 mb-72"
                        />
                    );
                    }}
                >
                    <img src="milatrycap.png" alt="" />
                </button>
                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300 "
                    onClick={() => {
                    setcap(
                        <img
                        src="wintercap.png"
                        alt=""
                        className="absolute scale-50 mb-96"
                        />
                    );
                    }}
                >
                    <img src="wintercap.png" alt="" />
                </button>
                
            </div>

            <div className="space-x-7 flex items-center justify-center mt-4">
                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setcap(
                        <img
                        src="cowboycap.png"
                        alt=""
                        className="absolute scale-50 mb-96"
                        />
                    );
                    }}
                >
                    <img src="cowboycap.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setcap(
                        <img
                        src="bluecap.png"
                        alt=""
                        className="absolute scale-50 mb-96"
                        />
                    );
                    }}
                >
                    <img src="bluecap.png" alt="" />
                </button>


                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setcap(
                        <img
                        src="worldwarcap.png"
                        alt=""
                        className="absolute scale-50 mb-96"
                        />
                    );
                    }}
                >
                    <img src="worldwarcap.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setcap(
                        <img
                        src="bluecartooncap.png"
                        alt=""
                        className="absolute scale-50 mb-96"
                        />
                    );
                    }}
                >
                    <img src="bluecartooncap.png" alt="" />
                </button>

            </div>
            

        </div>

        <div>
        <div className="space-x-7 flex items-center justify-center mt-4">
                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setsigar(
                        <img
                        src="sigar1.png"
                        alt=""
                        className="absolute scale-50 mb-28 mr-48"
                        />
                    );
                    }}
                >
                    <img src="sigar1.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setsigar(
                        <img
                        src="sigar2.png"
                        alt=""
                        className="absolute scale-50 -mb-40 mr-48"
                        />
                    );
                    }}
                >
                    <img src="sigar2.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setsigar(
                        <img
                        src="sigar3.png"
                        alt=""
                        className="absolute scale-50 mb-12 -mr-48"
                        />
                    );
                    }}
                >
                    <img src="sigar3.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setsigar(
                        <img
                        src="sigar4.png"
                        alt=""
                        className="absolute scale-50 -mb-10 mr-48"
                        />
                    );
                    }}
                >
                    <img src="sigar4.png" alt="" />
                </button>

            </div>
        </div>
        <div>
        <div className="space-x-7 flex items-center justify-center mt-4">
                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setnodels(
                        <img
                        src="nodels1.png"
                        alt=""
                        className="absolute scale-50 -mb-96 "
                        />
                    );
                    }}
                >
                    <img src="nodels1.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setnodels(
                        <img
                        src="nodels2.png"
                        alt=""
                        className="absolute scale-50 -mb-96 "
                        />
                    );
                    }}
                >
                    <img src="nodels2.png" alt="" />
                </button>

                <button
                    className="h-10 w-10 border-2 border-blue-400 rounded-xl bg-slate-300"
                    onClick={() => {
                    setnodels(
                        <img
                        src="nodels3.png"
                        alt=""
                        className="absolute scale-50 -mb-96 "
                        />
                    );
                    }}
                >
                    <img src="nodels3.png" alt="" />
                </button>
                </div>
        </div>
    </AwesomeSlider>
    </div>

    </div>
  );
};

export default Editablepanda;
