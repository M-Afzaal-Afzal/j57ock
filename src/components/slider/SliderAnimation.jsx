import React, {useState} from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
    phone: "+1-855-92-TOADS",
    email: "nofuntoads@gmail.com",
};

const sliderContent = {
    name: "No Fun Toad shop",
    designation: "Full-stack Developer",
    description: ` `,
    btnText: "Connect to metamask",
};

const Slider = () => {

    const [counter, setCounter] = useState(1);

    const counterHandler = (type) => {
        if (type === 'add' && counter < 10) {
            setCounter((prevCounter) => prevCounter + 1);
        } else if (type === 'sub' && counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }

    return (
        <>
            {/*  Home Banner */}
            <section id="home" className="home-banner">
                <div className="hb-top-fixed d-flex">
                    <div className="hb-info">
                        <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a>
                        <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
                            {conctInfo.email}
                        </a>
                    </div>
                    <div className="hb-lang">
                        {/*<ul className="nav">*/}
                        {/*  <li className="active">*/}
                        {/*    <a href="#">EN</a>*/}
                        {/*  </li>*/}
                        {/*  <li>*/}
                        {/*    <a href="#">FR</a>*/}
                        {/*  </li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
                {/* End hp-top-fixed */}

                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-lg-7">
                            <div className="type-box">
                                <h6 data-aos="fade-up" data-aos-duration="1200">
                                    Hello, Welcome to our
                                </h6>
                                <h1
                                    className="font-alt"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="100"
                                >
                                    {sliderContent.name}
                                </h1>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <TextLoop>
                                        <p className="loop-text lead">NFTs</p>
                                        <p className="loop-text lead">are serious</p>
                                        <p className="loop-text lead">business</p>
                                    </TextLoop>
                                </div>

                                <p
                                    className="desc"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="300"
                                >
                                    {sliderContent.description}
                                </p>
                                <div
                                    className="mt-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="400"
                                >
                                    <button style={{
                                        background: '#c21921',
                                    }} onClick={counterHandler.bind(this,'sub')} className={`px-btn px-btn-white`}>
                                        -
                                    </button>
                                    <button
                                        style={{
                                            background: 'rgb(32 159 255)',
                                        }}
                                        className="px-btn px-btn-white"
                                        // href="img/resume.png"
                                        // download
                                    >
                                        Connect to metamask ({counter})
                                    </button>
                                    <button style={{
                                        background: '#27CE0D',
                                    }} onClick={counterHandler.bind(this,'add')} className={`px-btn px-btn-white`}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container*/}
                <div
                    className="hb-me"
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/slider/home-banner.png"
                        })`,
                    }}
                />
            </section>

            {/* End Home Banner  */}
        </>
    );
};

export default Slider;
