import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const NationalAnthems = () => {
    const location = useLocation();
    const hash = location.hash;

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            setTimeout(() => handleClickScroll(), 800);
        }
    }, [hash]);

    useEffect(() => {
        document.title = 'SchoolEmblem | SMK Damansara Jaya';
    }, []);

    return (
        <div className="bg-white w-full pb-20 pt-8 bg-cover bg-bottom bg-no-repeat">
            <section
                id="section-1"
                className="items-center justify-center container gap-10 md:gap-16 lg:gap-20"
            >
                {/* TEXT SECTION */}
                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right ">
                                                   
                                                   <h4 className="!text-secondary">National Anthems</h4>
                                                   <h6 className="!text-secondary">Music Video Without Vocal with Lyrics</h6>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
  <a 
    href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FNEGARAKU%2DMINUS%5FONE%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E01745bfd%2Db9fd%2D4f26%2D9c0c%2D237f49c9f7da"
    target="_blank"
    rel="noopener noreferrer"
  >
    Negaraku (Minus One)
  </a>

  <br /><br />
</p>

<p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
  <a 
    href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28MINUS%5FONE%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e675b33%2Dd72d%2D47a5%2Da432%2Dbcaaed91cf67"
    target="_blank"
    rel="noopener noreferrer"
  >
   Selangor ( Minus One )
  </a>

  <br /><br />
</p>
                       
                         <h6 className="!text-secondary">Music Video With Vocal with Lyrics</h6>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
  <a 
    href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FNEGARAKU%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ef2df58f9%2Dbbfe%2D4d17%2Da552%2D7b82d7097125"
    target="_blank"
    rel="noopener noreferrer"
  >
    Negaraku 
  </a>

  <br /><br />
</p>

<p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
  <a 
    href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28VOCAL%29%2Emp4&ga=1"
    target="_blank"
    rel="noopener noreferrer"
  >
   Selangor 
  </a>

  <br /><br />
</p>
                    </div>
                </div>

            
            </section>
        </div>
    );
};

export default NationalAnthems;
