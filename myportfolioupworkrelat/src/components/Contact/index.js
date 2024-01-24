import './index.css'
import React from 'react'
import { Linkedin, Mail,Github, CircleUserRound } from 'lucide-react'




const Contact = () => (
    <div className='contactContai'>
        
        <h1 className='contactCoStyle'>contact</h1>
        <p className='contactGetIm'>Get In Touch </p>
        <div className='ContactVasuAlign'>
            <a href="mailto:lakshmivenkateswarapunnam@gmail.com" className='contactGmail1'>
            <Mail />
        </a>
        </div>
        <div className='ContactVasuAlign'>
       <a href='https://web.whatsapp.com/' > <CircleUserRound className='contactGmail1'/> </a>
       </div>
       <div>
       <div className='ContactVasuAlign'> 
       <a href=" https://www.linkedin.com/in/p-lakshmi-venkateswara-144510236/"><Linkedin className='contactGmail1' /></a>
       </div>
       <div className='ContactVasuAlign'>
       <a href="https://github.com/lakshmivenkateswara2356"><Github className='contactGmail1' /></a>
       </div>
       </div>
       
        
        <div className='contactFooterelement'>
          <h1 className='sectonfootele'>About</h1>
          <p className='minuteDerAa'>ph : +91 7842802368</p>
          <p className='minuteDerAa'>Gmail : lakshmivenkateswarapunnam@gmail.com</p>
          <p className='minuteDerAa'>linkdin: https://www.linkedin.com/in/p-lakshmi-venkateswara-144510236/</p>
        <p className='minuteDerAa'>github : https://github.com/lakshmivenkateswara2356</p>
        </div>
        </div>
    )


export default Contact