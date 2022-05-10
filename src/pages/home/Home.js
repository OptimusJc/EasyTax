import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="display-6 mt-4 py-4">
                        Welcome to the EasyTax app. An app that helps you with
                        your tax returns.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Home;
