import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form is Submitted`);
  };

  return (
    <div className={styles.FormContainer}>
      {/* Text Section */}
      <div className={styles.textDiv}>
        <h1 className={styles.contactus}>Contact Us</h1>
        <h4 className={styles.contacttext}>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </h4>
      </div>

      {/* Form Section */}
      <div className={styles.formDiv}>
        <div className={styles.formArea}>
          <div>
            <button className={styles.btn}>🧾VIA CHAT SUPPORT</button>
            <button className={styles.btn}>📞VIA CALL</button>
          </div>
          <p className={styles.viaemail}>🧾 VIA EMAIL FORM</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Floating Input Fields */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="email">E-Mail</label>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="text"
                id="text"
                value={formData.text}
                onChange={handleChange}
                placeholder=" "
                className={styles.textInput}
                required
              />
              <label htmlFor="text">Text</label>
            </div>

            <button
              className={styles.btn}
              style={{ alignSelf: "end" }}
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Image */}
        <div>
          <img
            style={{ maxWidth: "80%" }}
            src="./images/ServiceImage.svg"
            alt="cc"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
