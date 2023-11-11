import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import titleEmail from "../images/title-email.svg";

export default function Email() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  }


  return (
    <>
      <section className="email" id="email">
        <Container>
          <div className="row email-content">
            <div className="col-7 email-content-text">
              <img className="email-content-title" src={titleEmail} alt="民眾服務信箱" />
              <p>您的聲音，我們的行動！</p>
              <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
            </div>
            <form className="col-5 email-content-form" action="">
              <input name="name" type="text" className="email-content-form-input" placeholder="您的姓名" />
              <input name="email" type="email" className="email-content-form-input" placeholder="您的 Email" />
              <input name="tel" type="tel" className="email-content-form-input" placeholder="您的手機" />
              <textarea name="message" placeholder="您的建言"></textarea>
              <input type="submit" className="email-content-form-btn" value="送出意見" onClick={handleShow} />
            </form>
          </div>

          <Modal
            className="email-modal"
            show={show}
            onHide={handleClose}
          >
            <h4>感謝您抽出寶貴的時間給予我們寶貴的建議</h4>
            <p>我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。</p>
            <button onClick={handleClose}>返回</button>
          </Modal>
        </Container>
      </section>
    </>
  )
}