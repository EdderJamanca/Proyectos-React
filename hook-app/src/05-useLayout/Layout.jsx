import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const Layout=()=>{
    const {counter,aumentar}=useCounter(1)
    const {data,isLoading,hasError}=useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
       console.log('datos de endpoint',data,isLoading,hasError)
    const {author,quote}=!!data && data[0];

    const pRef=useRef();

    const [boxSize,setBoxSize]=useState({width:0,height:0});

    const {width,height}=boxSize;
    useLayoutEffect(()=>{
        console.log('pRef.current',pRef.current);
       const {height,width}=pRef.current.getBoundingClientRect();
       setBoxSize({height,width})
    },[quote])

    return (
        <>
         <h1>BreakingBad Quotes</h1>
         <hr />
            {
                isLoading 
                ? (
                    <div className="alert alert-info text-center">
                        Loading.....
                    </div>
                )
                :
                (
                    <blockquote 
                    ref={pRef}
                    className="blockquote text-end">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer" >{author}</footer>
                        <p className="mb-1">{width}-{height}</p>
                    </blockquote>
                )
            }

            <button


              onClick={()=>aumentar(1)} 
              className="btn btn-success"
              >Next </button>
        </>
    )
}