import { FaLinkedin } from "react-icons/fa";

export function Contact() {
    return (
      <section
        id='contact'
        className='w-full mt-10 container mx-auto px-6 py-8 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl text-neutral-200'
      >
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
              Get In Touch
            </h2>
            
          </div>
          <div className='mt-8 max-w-3xl text-center mx-auto'><p className='max-w-[700px] text-neutral-300 md:text-xl'>
              Get in touch for collaborations or just to say hello
            </p>
            <p className='text-lg text-neutral-300 text-center'>
              Feel free to reach out to me on{" "}
              <a
                href='https://www.linkedin.com/in/thomas-gil-dev/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline text-blue-500  items-baseline gap-2 inline-flex'
              >
                <FaLinkedin className='inline ' /> LinkedIn
              </a>{" "}
              for professional inquiries or just to connect!
            </p>
          </div>
        </div>
      </section>
    );
}