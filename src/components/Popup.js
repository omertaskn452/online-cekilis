import React, {useEffect, useRef} from "react"
import "../style.css"

const Popup = (props) => {

  const winnerList = props.winnerList.realWinners.map(item => <p>{item}</p>)
  const subList = props.winnerList.subs.map(item => <p>{item}</p>)

  const menuRef = useRef(null);

  useEffect(()=>{
    const handleMouseDown = (event) => {
      if(!menuRef.current.contains(event.target)){
        props.toggleIsSubmit()
      }
    }
    document.addEventListener("mousedown", handleMouseDown)
      return () => {document.removeEventListener("mousedown", handleMouseDown)}
  })

  return (
   <div className={`popup-body ${props.isSubmit ? "active" : "inactive"}`}>
    <div ref={menuRef} className="popup">
      <h2>{props.formDatas.giveawayName ? `"${props.formDatas.giveawayName}" Çekilişinin Kazananları` : `Kazananlar`} </h2>
      {winnerList}
      {props.formDatas.numberOfSubs > 0 && <h2>{props.formDatas.giveawayName ? `"${props.formDatas.giveawayName}" Çekilişinin Yedek Talihlileri` : `Yedek Talihliler`}</h2>
      }
      {subList}
    </div>
   </div>
  )
}
export default Popup