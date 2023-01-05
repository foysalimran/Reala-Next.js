import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// const mailchimpLink = process.env.MAILCHAIMP_LINK;
// console.log(mailchimpLink);

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <form>
      <div className="footer__subscribe">
        <input
          ref={(node) => (email = node)}
          type="email"
          required
          placeholder="Your email"
        />
        <button type="submit" onClick={submit}>
          Subscribe
        </button>
      </div>

      <div className="message col m-10px-t">
        {status === "sending" && (
          <div className=" alert alert-warning">sending...</div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status === "success" && (
        <div
          className="alert alert-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  );
}

const Footer = () => {
  return (
    <div className="footer section-padding-t">
      <div className="container">
        <div className="row">
          <div className="footer__top mx-auto">
            <h3>Join Newsletter</h3>
            <MailchimpSubscribe
              url="https://themeatelier.us17.list-manage.com/subscribe/post?u=318da6141291eeac976c39d64&amp;id=4297abfa34"
              // url={process.env.MAILCHAIMP_LINK}
              render={({ subscribe, status, message }) => (
                <SubscribeForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__logo"></div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__logo"></div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer__social">
              <h3>Social Connection</h3>
              <p>You should connect social area for any update</p>
              <ul>
                <li>
                  <a href="https://www.facebook.com" className="icon">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="icon">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="icon">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="tel:+880123456789" className="icon">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
