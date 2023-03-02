import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-center py-8 text-lg text-gray-200 space-x-4">
      <a href="https://github.com/mrsisk" target="_blank" rel="noreferrer">
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/gabriel-machona-616b36266/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={32} />
      </a>

      <a href="https://twitter.com/SiskDev" target="_blank" rel="noreferrer">
        <FaTwitter size={32} />
      </a>
    </div>
  );
}
