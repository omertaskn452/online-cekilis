import {useState} from "react";
import Popup from "./Popup";
import "../style.css"

const Giveaway = () => {

  const [formData, setFormData] = useState({
    giveawayName: "",
    numberOfWinner: "",
    numberOfSubs: "",
    textArea: ""
  })

  const [winners, setWinners] = useState({
    realWinners: [],
    subs: []
  })

  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }))
  }

  const toggleIsSubmit = () => {
    setIsSubmit(prevState => !prevState)
  }

  const splitTextAreaValues = () => {
      return formData.textArea.split("\n")
  }

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1)) + min
  }

  const pickWinner = () => {

    let localWinners = {
      localRealWinners: [],
      localSubs: []
    }
    if(formData.numberOfWinner <= 0){
      alert("Kazanan sayısı 0 veya negatif olamaz")
    }
    else{
      let listOfContent = splitTextAreaValues()
      console.log(`List of content: ${listOfContent}`)
      let winnerIndex;
      for(let i= 0;i<formData.numberOfWinner;i++){
        winnerIndex = generateRandomNumber(0, (listOfContent.length - 1))
        localWinners.localRealWinners.push(listOfContent[winnerIndex])
        console.log(`real winners: ${localWinners.localRealWinners}`)
        listOfContent.splice(winnerIndex, 1)
        console.log(`list of content after picking real winners: ${listOfContent}`)
      }
      if(formData.numberOfSubs > 0)
        for(let i = 0;i<formData.numberOfSubs;i++){
          console.log(`list of content before picking subs ${listOfContent}`)
          winnerIndex = generateRandomNumber(0, (listOfContent.length - 1))
          localWinners.localSubs.push(listOfContent[winnerIndex])
          console.log(`subs: ${localWinners.localSubs}`)
          listOfContent.splice(winnerIndex, 1)
          console.log(`list of content after picking subs: ${listOfContent}`)
        }
      toggleIsSubmit()
    }
    return localWinners
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let winnerOfGiveaway = pickWinner()
    setWinners(prevState =>({
      realWinners: winnerOfGiveaway.localRealWinners,
      subs: winnerOfGiveaway.localSubs
    }))
  }

  console.log(isSubmit)
  return(
      <section>
          <div className="giveaway">
            <h2>Katılımcı Listesi</h2>
            <p>Her satıra 1 katılımcı gelecek şekilde ekleyin</p>
              <form className="form" onSubmit={handleSubmit}>
                <textarea
                  className="textArea"
                  name="textArea"
                  value={formData.textArea}
                  onChange={handleChange}
                  />
                <div className="form-item">
                  <label className="form-label" htmlFor="giveawayName">Çekiliş İsmi(Opsiyonel)</label>
                  <input
                    className="form-input"
                    type="text"
                    id="giveawayName"
                    name="giveawayName"
                    value={formData.giveawayName}
                    onChange={handleChange}
                    />
                </div>
                <div className="grid-layout">
                  <div className="form-item">
                    <label className="form-label" htmlFor="numberOfWinner">Kazanacak Kişi Sayısı</label>
                    <input
                      className="form-input"
                      type="text"
                      id="numberOfWinner"
                      name="numberOfWinner"
                      value={formData.numberOfWinner}
                      onChange={handleChange}
                      />
                  </div>
                  <div className="form-item">
                    <label className="form-label" htmlFor="numberOfSubs">Yedek Kişi Sayısı</label>
                    <input
                      className="form-input"
                      type="text"
                      id="numberOfSubs"
                      name="numberOfSubs"
                      value={formData.numberOfSubs}
                      onChange={handleChange}
                      />
                  </div>
                </div>
                <button className="form-button">KAZANANLARI BELİRLE</button>
              </form>
              {isSubmit && <Popup
                formDatas = {formData}
                winnerList = {winners}
                isSubmit = {isSubmit}
                toggleIsSubmit = {toggleIsSubmit}
              />}
        </div>
      </section>
  )
}
export default Giveaway