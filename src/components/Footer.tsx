import React from 'react'

import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'


export default function Footer() {
  return (
    <div className="flex justify-center py-8 text-lg text-gray-200 space-x-4">
      <FaGithub className="" size={32}></FaGithub>
      <FaLinkedin size={32} />
      <FaTwitter size={32}/>
      
    </div>
  );
}
