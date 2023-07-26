import {useState} from "react";
import "../style.css"

const Giveaway = () => {

  const [formData, setFormData] = useState({
    giveawayName: "",
    numberOfWinner: "",
    numberOfSubs: "",
    textArea: ""
  })

  const [winner, setWinner] = useState([])

  const handleChange = (event) => {

    const {name, value} = event.target

    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }))

  }

  const splitTextAreaValues = () => {
    let splittedValues = formData.textArea.split("\n")
    return splittedValues
  }

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1)) + min
  }

  const pickWinner = () => {

    let winners =[];

    if(formData.numberOfWinner <= 0){
      alert("Kazanan sayısı 0 veya negatif olamaz")
    }
    else{
      let listOfContent = splitTextAreaValues()
      let winnerIndex;
      for(let i=0;i<formData.numberOfWinner;i++){
        //console.log(`list of content before picking winners ${listOfContent}`)
        winnerIndex = generateRandomNumber(0, (listOfContent.length - 1))
        //console.log(`winner index: ${winnerIndex}`)
        winners.push(listOfContent[winnerIndex])
        //console.log(`winners: ${winners}`)
        listOfContent.splice(winnerIndex, 1)
        //console.log(`list of content after removing: ${listOfContent}`)
        //console.log("*-*-*-*-*-*-*-*-*-*")
      }
    }

    return winners
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let winnerOfGiveaway = pickWinner()
    setWinner(prevState => winnerOfGiveaway)
  }

  const winnerElements = winner.map(item => <p>{item}</p>)

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
              <div>
                <h2>Kazananlar</h2>
                {winnerElements}
              </div>
        </div>
      </section>

  )

}

export default Giveaway