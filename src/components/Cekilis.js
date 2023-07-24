import React from "react";
import "../style.css"

const Giveaway = () => {

  const [formData, setFormData] = React.useState({

    giveawayName: "",
    numberOfWinner: "",
    numberOfSubs: "",
    textArea: ""

  })

  const handleChange = (event) => {

    const {name, value} = event.target

    setFormData(prevState => ({

        ...prevState,
        [name]: value


    }))

  }

  const handleSubmit = (event) => {

    event.preventDefault()
    let listOfItems = []
    listOfItems = formData.textArea
    console.log(listOfItems)
    console.log(listOfItems.length)
    console.log(listOfItems[2])

  }


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
        </div>
      </section>

  )

}

export default Giveaway