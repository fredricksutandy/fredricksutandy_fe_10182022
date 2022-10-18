import React, { useState, useEffect } from 'react'


const Pagination = ({pages = 7, setCurrentPage}) => {

    const numberOfPages = []
    for(let i = 1; i <= pages; i++){
        numberOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1)

    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]

        let dotsInitial = '...'

        if (numberOfPages.length < 6){
            tempNumberOfPages = numberOfPages
        }

        else if(currentButton >= 1 && currentButton <= 3){
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }

        setArrOfCurrButtons(tempNumberOfPages)
        setCurrentPage(currentButton)
    }, [currentButton])


  return (
    <div className="pagination-container">
        <a href="">prev</a>
        {arrOfCurrButtons.map(((item, index) => {
            return <a href="" 
            key={index} 
            className={`${currentButton === item ? 'active' : ''}`}
            onClick={() => setCurrentButton(item)}>{item}</a>
        }))}<a>1</a>
        <a href="">next</a>
    </div>
  )
}

export default Pagination