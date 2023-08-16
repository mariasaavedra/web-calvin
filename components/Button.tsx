'use client';

function Button() {
    const handleClick = () => {
        console.log("hello");
    }
  return <a onClick={handleClick} href="#modal1" className="p-2 bg-blue-400">Open Modal</a>;
}

export default Button;
