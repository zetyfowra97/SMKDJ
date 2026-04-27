import MdCert from "./MdCert";

const VissionMissionMotto = (props: any) => {
    document.title = 'Home | FPG Solution & Consultancy';
    

    function setIsOpen(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="overflow-x-hidden">
         
            <MdCert />
            <div>
                
                <div className="pb-10 bg-white" onClick={() => setIsOpen(true)}>
                  
                        <img  src="/assets/images/LOGOSMKDJ2.png" alt="" />
                   
                </div>
            </div>
        </div>
    );
};

export default VissionMissionMotto;
