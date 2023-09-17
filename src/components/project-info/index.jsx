import './main.scss'

export default function ProjectInfo(){
    return (
        <div className='wrapperProjectInfo' id='info'>
            <div className='projectInfoContainer'>
                <div className='content1'>
                    <div className='title1'>| Purpose</div>
                    <div className='text1'>Introducing an innovative at-home skin cancer detection test, making proactive monitoring 
                    of skin health more accessible and cost-effective compared to traditional hospital-based tests. This empowering
                     solution allows individuals to conveniently examine their skin for potential irregularities and changes in moles, 
                     promoting early detection and timely intervention. By enabling easy and regular self-assessments, this test 
                     enhances overall awareness of skin health, fostering a proactive approach to skin cancer prevention. Remember, 
                     while this at-home test offers valuable insights, consulting a dermatologist remains pivotal for accurate 
                     diagnosis and appropriate medical guidance. Your health, your control, made simpler and more affordable. </div>
                </div>
                <div className='content2'>
                    <div className='title2'>| How it works</div>
                    <div className='textBox'>
                        <div className='c1'><div className='t1'>1)</div>Setup SCD</div>
                        <div className='c2'><div className='t1'>2)</div>Download the app</div>
                        <div className='c3'><div className='t1'>3)</div>Insert the needle and get your reading</div>
                    </div>
                </div>
            </div>
        </div>
    )
}