import styles from "./contact.module.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import TextArea from "../../components/input/TextArea";
import Footer from "../../components/footer/Footer";

const Contact = () => {
    return (
        <div className="container">
            <div className={["row", styles.row].join(" ")}>
                <h3 className="h3 text-capitalize">contact us</h3>

                <div className={["col", "col-md-6"].join(" ")}>
                    <h5 className="h5 text-capitalize">get in touch with us</h5>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deleniti, sapiente sunt doloribus, optio nihil
                        magni odio nostrum placeat sint sequi eius tempore
                        soluta voluptate dolores. Earum tempore officia est
                        amet.
                    </p>

                    <div className={[styles.social].join(" ")}>
                        <h6 className={["h6 text-capitalize"]}>our offices</h6>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Distinctio architecto,
                        </p>
                    </div>
                </div>

                <div className={["col", "col-md-6"].join(" ")}>
                    <form>
                        <Input type="text" placeholder="your name" />
                        <Input type="email" placeholder="your email" />
                        <Input type="text" placeholder="subject" />
                        <TextArea placeholder="enter your text here" />

                        <Button
                            title="submit"
                            classes={[
                                "btn",
                                "btn-danger",
                                styles.btn_contact,
                            ].join(" ")}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
