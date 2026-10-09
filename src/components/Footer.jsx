import logoWhite from '../assets/images/logo-white.png'
import { useQuizLink } from './QuizContext.js'

export default function Footer() {
  const onQuiz = useQuizLink()
  return (
    <footer className="foot" id="contact">
      <div className="wrap foot-grid">
        <div>
          <img src={logoWhite} alt="ECOVIS RKCA" style={{ height: 40, width: 'auto', alignSelf: 'flex-start' }} />
          <span style={{ color: '#BFC3C7' }}>Member of ECOVIS International</span>
        </div>
        <div>
          <div className="h">What we do</div>
          <a href="#institutionalise">Institutionalise</a>
          <a href="#investable">Make it Investable</a>
          <a href="#scale">Scale</a>
        </div>
        <div>
          <div className="h">Explore</div>
          <a href="#studio-ai">Studio AI</a>
          <a href="#journey">The Journey</a>
          <a href="#quiz" data-quiz="" onClick={onQuiz}>Take the quiz</a>
        </div>
        <div>
          <div className="h">Contact us</div>
          <span>1902, Kailas Business Park, Vikhroli West, Mumbai 400079</span>
          <span style={{ userSelect: 'all' }}>info@ecovisrkca.com</span>
          <span>[Phone number]</span>
        </div>
      </div>
      <div className="wrap foot-bot">© ECOVIS RKCA Advisors Ltd</div>
    </footer>
  )
}
