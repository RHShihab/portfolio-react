import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">
          <a href="https://www.linkedin.com/in/rhshihab/" className="border-b">
            in/rhshihab/
          </a>
        </p>
        <a href={"mailto:" + CONTACT.email} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
