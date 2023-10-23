import { useState } from "react";
import { BsBalloonHeart } from "react-icons/bs";

function Rsvp() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    const formElement = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycby970WxA6B5mjWpvB3nIAmYsSNpoEBJJchvcnnibIlIn0MtZq0pVfvCDCt6P17xDhAz1g/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setResponseMessage(data);
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setResponseMessage("Ocurrió un error al enviar el formulario.");
        setFormSubmitted(true);
      })
      .finally(() => {
        setLoading(false); // Cuando la solicitud finaliza, detenemos la carga
      });
  }
  // https://script.google.com/macros/s/AKfycby970WxA6B5mjWpvB3nIAmYsSNpoEBJJchvcnnibIlIn0MtZq0pVfvCDCt6P17xDhAz1g/exec
  return (
    <div className="container-fluid py-5" id="rsvp">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            RSVP
          </h6>
          <h1 className="font-secondary display-4">Únete a Nuestro Partido</h1>
          <BsBalloonHeart className="fa-2x text-dark" />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <p>
                A todos nuestro invitados, agradecemos su comprensión. <br />{" "}
                Nuestra celebración será de adultos. Por favor, no incluir a sus
                hijos en la confirmación. Esperamos compartir este momento
                especial con ustedes.
              </p>
              <h6
                className="text-uppercase text-primary mb-3"
                style={{ letterSpacing: "3px" }}
              >
                Gracias
              </h6>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {formSubmitted ? (
              <div className="text-center">
                <p>{responseMessage}</p>
              </div>
            ) : loading ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="text-center">
                <form className="form" onSubmit={(e) => submit(e)}>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-secondary border-0 py-4 px-3"
                        placeholder="Nombre completo"
                        name="Name"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-secondary border-0 py-4 px-3"
                        placeholder="Email"
                        name="Email"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control bg-secondary border-0"
                        style={{ height: "52px" }}
                        id="numberGuests"
                        name="NumberGuest"
                      >
                        <option>Número de invitados</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control bg-secondary border-0"
                        style={{ height: "52px" }}
                        id="attending"
                        name="Attending"
                      >
                        <option>Asistiré</option>
                        <option>Todos los eventos</option>
                        <option>Fiesta de bodas</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control bg-secondary border-0 py-2 px-3"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      id="message"
                      name="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary font-weight-bold py-3 px-5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
