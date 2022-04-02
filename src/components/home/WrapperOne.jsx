import React from "react"

const WrapperOne = () => {
  const data = [
    {
      num: "520%",
      text: "AWARDS WINNING",
    },
    {
      num: "99%",
      text: "SATISFIED CLIENTS",
    },
    {
      num: "3325",
      text: "CREATIVE PROJECTS",
    },
    {
      num: "54380",
      text: "LINES OF CODE ",
    },
  ]
  return (
    <>
      <section className='Branding wrapperOne'>
        <div className='container grid1'>
          {data.map((value) => {
            return (
              <div className='box'>
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default WrapperOne
