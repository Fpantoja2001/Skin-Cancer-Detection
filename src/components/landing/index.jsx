import './main.scss'

export default function Landing(){
    return (
        <div className='wrapperLanding' id='landing'>
            <svg id='s1' width="664" height="656" viewBox="0 0 664 656" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M302.848 0.0533065C384.568 -2.45442 433.027 84.0866 493.285 139.345C558.333 198.996 653.817 241.945 662.411 329.783C671.341 421.056 602.541 499.936 534.592 561.527C470.367 619.742 389.527 655.028 302.848 655.7C215.463 656.377 126.628 629.477 67.4829 565.148C10.2598 502.909 -8.17899 413.561 3.19457 329.783C13.2585 255.651 73.4352 206.049 123.75 150.685C178.289 90.6714 221.792 2.54062 302.848 0.0533065Z" fill="#FFCC99"/>
            </svg>
            <svg  id='s2' width="817" height="711" viewBox="0 0 817 711" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M419.79 1.04785C513.823 -6.93709 605.338 31.2921 676.324 95.968C752.605 165.468 817.189 257.436 817 362.946C816.811 468.322 752.989 561.265 675.37 628.931C604.452 690.756 512.222 705.255 419.79 709.225C321.805 713.433 218.953 715.369 142.209 651.828C57.8248 581.962 -11.3546 474.36 1.55739 362.946C13.8391 256.971 123.093 204.493 201.961 136.249C269.54 77.7723 332.194 8.48616 419.79 1.04785Z" fill="#C2966A"/>
            </svg>
            <svg id='s3' width="594" height="657" viewBox="0 0 594 657" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M305.07 0.970466C391.83 10.0291 439.722 98.8147 494.677 166.56C541.323 224.063 591.435 282.144 593.201 356.166C595.003 431.682 556.242 500.535 503.944 555.04C450.386 610.859 382.388 658.962 305.07 656.459C229.415 654.01 172.434 595.851 118.666 542.571C64.5415 488.938 10.569 431.882 2.02627 356.166C-7.44729 272.2 16.4099 186.633 71.2541 122.35C130.505 52.9021 214.274 -8.50955 305.07 0.970466Z" fill="#69401D"/>
            </svg>



            <div className='landingContainer'>
                <div className='left'>
                    <div className='leftContainer'>
                        <div className='title1'>Skin</div>
                        <div className='title2'>Cancer</div>
                        <div className='title3'>Detection</div>
                    </div>
                    
                </div>

                <div className='right'>
                    <img src={require("./images/IMG_7902.jpg")} alt="Arduino"/> 
                </div>
            </div>
        </div>
    )
}