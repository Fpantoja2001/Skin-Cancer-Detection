import './main.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact(){

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_f6t3dyq',
            'template_sq6rrqc',
            form.current,
            'QrrJoGVWolccNmfYn'
        ).then((result) => {
            window.alert('success')
            form.current.reset()
            console.log(form.current)
        }, (error) => {
            window.alert('fail')
        }) 
    }

    return (
        <div className='wrapperContact' id='contact'>
            <div className='contactContainer'>
                <div className='left'>
                    <div className='top'>
                       <div className='gm1'>
                            <div className='img'>
                                <img src={require("./images/IMG_2452.jpg")} alt="Aanya"/> 
                            </div>
                            <div className='descript1'>
                                <div className='name'>Aanya Bhandari</div>
                                <div className='major'>Computer Science</div>
                                <div className='school'>University of Flordia 27'</div>
                                <div className='links'>
                                    <a href="https://www.linkedin.com/in/aanya-bhandari-fl/"><LinkedInIcon id='li'></LinkedInIcon></a>
                                    <a href="https://github.com/aanyabhandari3"><GitHubIcon id ='gi'></GitHubIcon></a>
                                    <a href="mailto:aanyabhandari3@gmail.com"><EmailIcon id='ei'></EmailIcon></a>
                                </div>
                            </div>
                        </div>
                        <div className='gm2'>
                            <div className='img'>
                                <img src={require("./images/IMG_8030.jpg")} alt="Aya"/> 
                            </div>
                            <div className='descript2'>
                                <div className='name'>Aya Kasim</div>
                                <div className='major'>Computer Science</div>
                                <div className='school'>Yale 26'</div>
                                <div className='links'>
                                    <a href="https://www.linkedin.com/in/aya-kasim-511481229/"><LinkedInIcon id='li'></LinkedInIcon></a>
                                    <a href="https://github.com/kasim836198673"><GitHubIcon id ='gi'></GitHubIcon></a>
                                    <a href="mailto:aya.kasim@yale.edu"><EmailIcon id='ei'></EmailIcon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='gm3'>
                            <div className='img'>
                                <img src={require("./images/IMG_0309.jpg")} alt="Tahina"/> 
                            </div>
                            <div className='descript3'>
                                <div className='name'>Tahina Dean Saint Louis</div>
                                <div className='major'>Computer Science</div>
                                <div className='school'>University of Massachusetts Amherst 26'</div>
                                <div className='links'>
                                    <a href="https://www.linkedin.com/in/tahina-saint-louis-9413221b1/"><LinkedInIcon id='li'></LinkedInIcon></a>
                                    <a href="https://github.com/Tahina23"><GitHubIcon id ='gi'></GitHubIcon></a>
                                    <a href="mailto:tsaintlouis@umass.edu"><EmailIcon id='ei'></EmailIcon></a>
                                </div>
                            </div>
                        </div>
                        <div className='gm4'>
                            <div className='img'>
                                <img src={require("./images/IMG_7982.jpg")} alt="Felix"/> 
                            </div>
                            <div className='descript4'>
                                <div className='name'>Felix Manuel Pantoja</div>
                                <div className='major'>Computer Science</div>
                                <div className='school'>University of Massachusetts Amherst 26'</div>
                                <div className='links'>
                                    <a href="https://www.linkedin.com/in/felix-manuel-pantoja/"><LinkedInIcon id='li'></LinkedInIcon></a>
                                    <a href="https://github.com/Fpantoja2001"><GitHubIcon id ='gi'></GitHubIcon></a>
                                    <a href="mailto:fpantoja@umass.edu"><EmailIcon id='ei'></EmailIcon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='title'>| Contact</div>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='left'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>

                                <li className='left'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' resize='none' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='submit-button'  value='Send'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer'>created by AFTA</div>
        </div>
    )
}