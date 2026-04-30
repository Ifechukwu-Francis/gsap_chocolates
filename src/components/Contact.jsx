import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2',{type:'words'});

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            },
            ease:'power1.inOut',
        })

        timeline
        .from(titleSplit.words, {
            opacity:0, yPercent:100, stagger:0.02
        })
        .from('#contact h3, #contact p',{
             opacity:0, yPercent:100, stagger:0.02
        })
        .to('#f-right-leaf',{
            y:'-50', duration:1, ease:'power1.inOut'
        })
           .to('#f-left-leaf',{
            y:'-50', duration:1, ease:'power1.inOut'
        },'<')
    })


  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

        <div className="content">
            <h2>Where to Find Us</h2>
            <div>
                <h3>Visit Our Bar</h3>
                <p>223, Eziobodo Road. #404, FUTO Oweeri West</p>
            </div>

            <div>
                <h3>contact Us</h3>
                <p>+234 1234567890</p>
                <p>hello@brown.com</p>
            </div>
            <div>
                <h3>Open every day</h3>
                {openingHours.map((time) => 
                (<p key= {time.day}>
                    {time.day} : {time.time}
                </p>) )}
            </div>
            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">

                    {socials.map((Social) => (
                        <a href={Social.url} key={Social.name} target="_blank" rel="noopener noreferrer" aria-label={Social.name}>
                            <img src={Social.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact