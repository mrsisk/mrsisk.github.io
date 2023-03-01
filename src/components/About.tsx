import React from 'react'

export default function About() {
  return (
    <section className="py-4 2xl:py-6 overflow-hidden">
      <div className="container px-4 mx-auto">
    
        <div className="max-w-x mx-auto text-center">
          <h2 className="mt- mb-4 text-6xl 2xl:text-7xl text-white font-bold font-heading">
            About me!
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-xl text-gray-200">
            This morning, platea dictumst nec nunc. In hac habitasse. In
            general, dignissim accumsan just.
          </p>
          <div className="inline-flex pt-4 mb-4 items-center border-t border-gray-500">
            <img
              className="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt=""
            />
            <div className="text-left">
              <h4 className="mb-1 text-2xl font-bold text-gray-50">
                Gabriel Machona
              </h4>
             
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center ">
            <p className="mb-6  text-xl text-gray-200 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              enim quidem doloremque, corporis sapiente, maiores soluta hic
              rerum non, sit cum ex deleniti. Quod! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quasi fugiat, voluptatem, laborum asperiores distinctio ducimus officia cumque voluptas error maxime totam pariatur cupiditate nihil eaque harum, quae id tempora.
            </p>
            <p className="mb-6  text-xl text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id
              qui deserunt iure cupiditate vero. Id deleniti aliquid iste
              dolore! Tempore vel non atque laboriosam. Magnam, beatae
              explicabo.
            </p>
            <p className="mb-6  text-xl text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              enim quidem doloremque, corporis sapiente, maiores soluta hic
              rerum non, sit cum ex deleniti. Quod!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
