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
                <div className="flex justify-center items-center gap-4">
                    <img src={facebookIcon}/>
                    <img src={instagramIcon}/>
                    <img src={twitterIcon}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;