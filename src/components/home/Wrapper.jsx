import React from "react"

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES?",
      heading: "Get The Best For Your Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
  return (
    <>
      <section className='Branding wrapper'>
        <div className='container'>
          {data.map((value) => {
            return (
              <div className='box'>
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
                <button className='primary-btn'>Contact Us</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
