import facebookIcon from "/src/assets/facebook.png"
import instagramIcon from "/src/assets/instagram.png"
import twitterIcon from "/src/assets/twitter.png"

function Footer() {
    return (
        <footer className="bg-main-dark-purple text-white py-10 px-4 ">
            <div className="flex justify-between items-center container mx-auto">
                <div className="">
                    <span className="text-xl">© 2023 JustFit. All Rights Reserved.</span>
                </div>
                <div className="flex gap-5 text-sm text-gray-400">
                    <span>Faq</span>
                    <span>About Us</span>
                    <span>Our services</span>
                    <span>Careers</span>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href="#"><img src={facebookIcon}/></a>
                    <a href="#"><img src={instagramIcon}/></a>
                    <a href="#"><img src={twitterIcon}/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;