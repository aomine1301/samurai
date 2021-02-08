import React, {useState} from "react";
import classes from './Paginator.module.css'


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (<div className={classes.container}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}


        {pages.filter((p => p >= leftPortionPageNumber && p <= rightPortionPageNumber))
            .map((p,idx) => {
                return <div className={classes.page} key={idx}>
                    <span className={(currentPage === p && classes.selectedPage).toString()}
                          key={p.id}
                          onClick={() => {
                              onPageChanged(p)
                          }
                          }>{p}</span>
                </div>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}

    </div>)
}
export default Paginator
