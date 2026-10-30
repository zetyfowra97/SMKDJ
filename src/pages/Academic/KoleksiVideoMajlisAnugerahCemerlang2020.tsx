import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const KoleksiVideoMajlisAnugerahCemerlang2020 = () => {
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

    const videos = [
        {
            titlePrefix: 'Photo',
            titleSuffix: ' Montage',
            url: 'https://djians.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kamlhbnMuc2hhcmVwb2ludC5jb20vOmY6L2cvRWk1TllOQ1dERlpNb3Uza21XMDJIcThCNTFSbUdRZjJwZFFKMHI3WGQ4Z1laZz9ydGltZT1oZHJQcWdlTDJVZw&id=%2FShared%20Documents%2F2021%2FA1%20%2D%20MONTAGE%2Emp4&parent=%2FShared%20Documents%2F2021',
            secondUrl:
                'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA1%20%2D%20MONTAGE%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9f453551%2D6fee%2D4e1c%2Db41f%2D315741dca9cd',
        },
        {
            title: 'Bingkisan Untuk Guru',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA2%20%2D%20BINGKISAN%20UNTUK%20GURU%2EMOV&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E567ee125%2Dc828%2D4310%2D8e0b%2D95e9ec0a02b0',
        },
        {
            title: 'Pelancaran Bulan Bahasa',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA6%20%2D%20Pelancaran%20Bulan%20Bahasa%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E568f40f5%2D160e%2D47f6%2Dae3c%2D8e2f4eae0790',
        },
        {
            title: 'Video Aktiviti Pembelajaran',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA7%20%2D%201%20MAC%20VIDEO%20AKTIVITI%20PEMBELAJARAN%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E049dd672%2Dcfe1%2D4cd4%2Daa83%2Da827b8a3c9ed',
        },
        {
            title: 'Koir',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA8%20%2D%20KOIR%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3aaf8858%2D19b7%2D4e52%2Da0b4%2D70e4bcdfe294',
        },
        {
            title: 'Senarai Pencapaian 7A – 9A',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA9%20%2D%202%20MAC%20SENARAI%20PENCAPAIAN%207A%2D9A%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E7d373747%2Dd46c%2D4485%2Da393%2D6deaa7b157ec',
        },
        {
            title: 'Video Ucapan Form 5',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA10%20%2D%20VIDEO%20UCAPAN%20FORM%205%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3f2a34e5%2Dcdb4%2D48cb%2D8891%2D90efc28f8026',
        },
        {
            title: 'Senarai Pencapaian 10A – 11A',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA11%20%2D%203%20MAC%20SENARAI%20PENCAPAIAN%2010A%2D11A%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E0aab511c%2D5b7d%2D4f0d%2D9ab1%2D73a8ea660168',
        },
        {
            title: 'Tokoh Inspirasi SPM 2020',
            url: 'https://login.microsoftonline.com/371d75f2-c1e7-4b27-bd87-4cc2935bd9b7/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&ear%5Fjwe%5Fcrypto=eyJhbGciOiJFQ0RILUVTIiwiZW5jIjoiQTI1NkdDTSIsImFwdiI6IkFBQUFDVVZoY2tOc2FXVnVkR2dBQUFCRlEwc3pNQUFBQUN0TFpuSHpjcmtRRGlibXBxYXVZbmIxTko0R0NGTnJvMlJySkMyUGcwWmJnSlRxRVZheTM5dkVlNnN6VTFOeld5WnpVTUVUZ3drQ1JTUm9UZWN5aXkvUVRPekptWkhIbDE1QWpSTVhMUTVSeVR2cWJPWnF0S2d1UGdvNGIrc2J1QUFBQUJqZnYvcEtYK0NYWDZURzNSZHRHWmp4UWJHRTN4Y29taTQ9In0%3D&ear%5Fjwk=eyJhbGciOiJFQ0RILUVTIiwiY3J2IjoiUC0zODQiLCJ4IjoiQUFBQU1DdExabkh6Y3JrUURpYm1wcWF1WW5iMU5KNEdDRk5ybzJSckpDMlBnMFpiZ0pUcUVWYXkzOXZFZTZzelUxTnpXdz09IiwieSI6IkFBQUFNQ1p6VU1FVGd3a0NSU1JvVGVjeWl5L1FUT3pKbVpISGwxNUFqUk1YTFE1UnlUdnFiT1pxdEtndVBnbzRiK3NidUE9PSIsImt0eSI6IkVDIn0%3D&spa%5Fclient%5Fid=08e18876%2D6177%2D487e%2Db8b5%2Dcf950c1e598c&client%5Finfo=1&response%5Ftype=code%20id%5Ftoken%20spa%5Frt&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=EF8311131F6A5E89713A4F1EE74DE89405825F2F877D0606%2D618F2AA0295CFB2DD56490D77853EF4823422BF2152A5BF2DBE9E282732DCFEF&redirect%5Furi=https%3A%2F%2Fdjians%2Dmy%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0wJjMyPUFBTDlGd0FBQUJSSUpzM3pLRHRialRyR0ZNQ0VaQkdwdWFjTXVBek94ZWZIMDV4RG0yMlVFZU9tMzlwTk9QTCUyQnlJTG51VWpTZWQxMzM1NUxvNVpsRXlxMWE2ODlZdWFoZnpldUFEMnVzUDE1YjkwJTJCZzlzMkxxQklKU0UyeHJRdmQyZTQ2N3lKRnZVa2UwSnVuZ3ZEajlXdnN3VmhValAwUFV2c3BEY0VMZSUyRnJCeCUyRk9EeDN4cmV4Sk1oZVEwczJxNkZzSjRkUEhwY085SHlua2lmY0wzTFRYJTJGYnJpRnV2UWZvQlZrVXJQWmt0S0tyTUg1T29uN2VQVVhkJTJCR2E1SDR5ZDJzRzJZVkM2NUI5bTk4TVZLRGtBVVdlSTBIMXJweklIN0JabmpaUER1VzVUTUR4UVhaWWJUbnpGaDVycmNjSkhWYTdjNExmN0dtZXYlMkZhekV0eTROZ3B3VGV4UVp0MmRvaGFPajNIU3BLQmlwajdWWmt1UiUyRm10JTJGVnhjUVYlMkJN&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=8c4a48a2%2D3072%2D9000%2D01d1%2D886912bf2c50',
            titlePrefix: 'T',
            titleSuffix: 'okoh Inspirasi SPM 2020',
            secondUrl:
                'https://login.microsoftonline.com/371d75f2-c1e7-4b27-bd87-4cc2935bd9b7/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&ear%5Fjwe%5Fcrypto=eyJhbGciOiJFQ0RILUVTIiwiZW5jIjoiQTI1NkdDTSIsImFwdiI6IkFBQUFDVVZoY2tOc2FXVnVkR2dBQUFCRlEwc3pNQUFBQU0vRFVZYVBZd3hRR0haeUczYURnSUFrdzNyaTBIRXU2UGZNdTMzN3NSOHhNTTlGcXh1Mm5Va2tzSjI5TkdFTE9RQjc5b1NHVXZWNEVkV2owMVVlVENuVWhqbXVOQjZDSUsrUDBiQU92MkwrSzFHMFlwcXdDZGxJaGNESXA3K2o4Z0FBQUJpMXdabzlVWERORlFoV0syOVFlM1FwemJwbm9DWlBpdG89In0%3D&ear%5Fjwk=eyJhbGciOiJFQ0RILUVTIiwiY3J2IjoiUC0zODQiLCJ4IjoiQUFBQU1NL0RVWWFQWXd4UUdIWnlHM2FEZ0lBa3czcmkwSEV1NlBmTXUzMzdzUjh4TU05RnF4dTJuVWtrc0oyOU5HRUxPUT09IiwieSI6IkFBQUFNQUI3OW9TR1V2VjRFZFdqMDFVZVRDblVoam11TkI2Q0lLK1AwYkFPdjJMK0sxRzBZcHF3Q2RsSWhjRElwNytqOGc9PSIsImt0eSI6IkVDIn0%3D&spa%5Fclient%5Fid=08e18876%2D6177%2D487e%2Db8b5%2Dcf950c1e598c&client%5Finfo=1&response%5Ftype=code%20id%5Ftoken%20spa%5Frt&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=985692A03D8197CFF4F84D13B2FFC6521C7AE7FACFFA6671%2DD261862D7095FCFD90194E9F2209F9E75BDCB2311FB60C33A8110197AADEE26F&redirect%5Furi=https%3A%2F%2Fdjians%2Dmy%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0wJjMyPUFBTDlGd0FBQUJSSUpzM3pLRHRialRyR0ZNQ0VaQkdwdWFjTXVFSCUyQnhERXNQZ0ZKbGJ1bTlUbngzbHNMY21QUWx0MjFpWmpsOWwyV002SyUyRnFMRHV2eHJuS1oxV3JsMElRNlIza2F1T0NicjJLT1YzSmV5UE41b3FHJTJGJTJGckxXazdaQWw5U1E4QWp6MUclMkIyNDZQbEZjSFVvTjBPNWpZcmt1NiUyRmpjT1BNR2NiaTd1Z002RHpJZnNwdVYlMkJnUTBabSUyRk9RTExTWFFZWXZCTEE1Y0g0WE82OXlMUVVzdjhBeHVhM0dRJTJCZnBEWEFQVG52UXhkY0FNWmUxeFA4SXhZa2hIekZRbTRQTGxKZUtIUEl2VHM4ck1qSDVmQXdKeDBJTmwzeXJpQnJUM2J5dCUyRnpkME91WiUyQjElMkJYZXRIckgwQ0twYUd3Y0N0VHVXRnJGQXFDZzRocnpLQ0RiOXZJeGc4ajE5JTJGZHNuNHM2VmdKUFNpVjlUcFpIWlIyWjNxVG1JdFdGRVhVdGclM0QlM0Q&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=914a48a2%2D0005%2D9000%2D01d1%2D8585bf44797c',
        },
        {
            title: 'Tokoh Cemerlang SPM 2020',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA13%20%2D%205%20MAC%20TOKOH%20CEMERLANG%20SPM%202020%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E31f781aa%2D5c55%2D4f8b%2D83c8%2D28b5e2f68bb0',
        },
        {
            title: 'Tokoh Terbaik SPM 2020',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA14%20%2D%206%20MAC%20TOKOH%20TERBAIK%20SPM%202020%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E6e7ffeae%2D119a%2D4995%2Da744%2Dd047a2812d44',
        },
        {
            title: 'Peluang Kedua',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA15%20%2D%20Peluang%20Kedua%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E587ef076%2Dd784%2D483b%2Da97a%2Dc8b653c90680',
        },
        {
            title: 'Video Dewan 2020',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FA16%20%2D%20VIDEO%20DEWAN%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Efb4efc4a%2D0735%2D45fd%2D8567%2Ddd8b73585d1e',
        },
        {
            title: 'PIBG Photo Montage',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FPIBG%202020%20LATEST%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3eec245a%2Df8c9%2D413e%2Daab0%2Ddee04e1c77c6',
        },
        {
            title: 'Recorded Event – Majlis Anugerah Cemerlang 2020',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FMajlis%20Anugerah%20Cemerlang%20%26%20PIBG%20SMK%20Damansara%20Jaya%202021%2D20211009%5F091409%2DMeeting%20Recording%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb851bbe2%2D5e40%2D4593%2Dbe76%2D4780c481e639',
        },
        {
            title: 'Recorded Event – Mesyuarat Agung PIBG 38/2021',
            url: 'https://djians.sharepoint.com/_layouts/15/stream.aspx?id=%2FShared%20Documents%2F2021%2FMajlis%20Anugerah%20Cemerlang%20%26%20PIBG%20SMK%20Damansara%20Jaya%202021%2D20211009%5F104501%2DMeeting%20Recording%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecc09f462%2D9e62%2D4436%2Db161%2D3b2cd0e5be1e',
        },
        {
            title: 'Buku Program PIBG 38/2021 (PDF)',
            url: 'https://djians.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx?id=%2FShared%20Documents%2F2021%2FBUKU%20PROGRAM%20AGM%20PIBG%20KE%2D38%2Epdf&parent=%2FShared%20Documents%2F2021&p=true&ga=1',
        },
        {
            title: 'Chat History',
            url: 'https://djians.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kamlhbnMuc2hhcmVwb2ludC5jb20vOnY6L2cvRWZfa0hNMkxRTEZDcWRtaGdaaEJjU2NCeVFoUGJqVm91Y0c5MnNYVUQyR2pJZz9ydGltZT0wMUhKczU2TTJVZw&id=%2FShared%20Documents%2F2021%2FChat%20History%2Epdf&parent=%2FShared%20Documents%2F2021',
        },
    ];

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="container mx-auto items-center justify-center gap-10 px-4 md:gap-16 lg:gap-20">
                <div data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 className="!text-secondary">Academic, Academic-Announcements, Choir, Main Page, PIBG, SPM</h6>

                        <p className="text-4xl font-bold text-black">Koleksi Video Majlis Anugerah Cemerlang 2020 & Mesyuarat Agung PIBG 38</p>
                    </div>

                    {/* TIMETABLE-STYLE VIDEO LIST */}
                    <div className="mt-8 w-full overflow-x-auto">
                        <table className="border-gray-200 w-full border-collapse border text-left">
                            <tbody>
                                {videos.map((video, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-[#f5f6f7]' : 'bg-white'}>
                                        <td className="border-gray-200 w-[72px] border px-4 py-4 text-center text-lg font-normal text-[#444] md:text-2xl">
                                            {index + 1}
                                        </td>

                                        <td className="border-gray-200 border px-4 py-4 text-base text-[#444] md:px-6 md:text-2xl">
                                            {video.secondUrl ? (
                                                <>
                                                    <a
                                                        href={video.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#444] transition-colors duration-200 hover:text-[#F58220] hover:underline"
                                                    >
                                                        {video.titlePrefix}
                                                    </a>
                                                    <a
                                                        href={video.secondUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#444] transition-colors duration-200 hover:text-[#F58220] hover:underline"
                                                    >
                                                        {video.titleSuffix}
                                                    </a>
                                                </>
                                            ) : (
                                                <a
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#444] transition-colors duration-200 hover:text-[#F58220] hover:underline"
                                                >
                                                    {video.title}
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KoleksiVideoMajlisAnugerahCemerlang2020;
