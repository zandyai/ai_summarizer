import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="dycode_logo" className='w-28 object-contain' />

        <button type='button' onClick={() => window.open('https://github.com/zandyai')} className="black_btn">
          Github 
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Looking for a shortcut to breeze through long articles? Look no further than DyCode Summarizer - the ultimate tool for turning wordy posts into short, sweet, and to-the-point summaries. Say goodbye to information overload and hello to clarity and simplicity with this free, open-source article summarizer!
      </h2>
    </header>
  )
}

export default Hero