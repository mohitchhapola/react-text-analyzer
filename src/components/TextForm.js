import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handleupbtn = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleclear = ()=>{
    let newtext = ("");
    setText(newtext);
  }
  const handlelpbtn = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleonchange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (

    <>
    <div className='my-5 mx-auto'>
        <h1 className='text-2xl font-medium py-2 text-center'>{props.heading}</h1>
    {/* <label htmlFor="message" className="block mb-2 mx-2 text-2xl my-4 text-gray-900 dark:text-black">Enter your Text</label> */}
    <textarea id="message" rows="7" onChange={handleonchange} value={text} className="block p-2.5 w-full text-sm mx-1 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-xl" placeholder="Write your text here..."></textarea>
    <button type="button" className="p-2 shadow-xl my-2 mx-2 laptop:mx-1 rounded bg-blue-500 text-white cursor-pointer hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-600" onClick={handleupbtn}>Convert to UpperCase</button>
    <button type="button" className="p-2 shadow-xl my-2 mx-auto laptop:mx-1 rounded bg-blue-500 text-white cursor-pointer hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-600" onClick={handlelpbtn}>Convert to LowerCase</button>
    <div className='flex-col flex items-center laptop:inline tablet:inline '><button type="button" className="p-2 my-2 shadow-xl tablet:mx-2 laptop:mx-1 rounded bg-blue-500 text-white cursor-pointer hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-600 "  onClick={handleclear}>Clear Text</button></div>
    </div>
    <div className="counter mx-2 text-center laptop:text-left laptop:mx-1">
      <h2 className='text-red-500 font-medium text-xl'>Your Summary</h2>
      <p className='text-base'>{text.split(" ").length} words and {text.length} character</p>
      
      <h1 className='my-2 text-xl font-bold'>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}
