import { educations } from "./styles";

export default function Education() {
  return (
    <main>
      <ul className={educations}>
        <li>
          <div>
            <h2>Wise Up</h2>
            <p>Certificate in advanced English</p>
            <time>Jan 2020 - Dec 2021</time>
          </div>

          <a target="_blank" href="https://files-plus.wiseup.com/?url=https%3A%2F%2Ffiles-plus.wiseup.com%2Fstorage%2Fcertificates%2Fwiseup-plus%2F%242b%2410%24W0UXziQvQ1qaaWI9Z082NO31ZCyI%2FqNcK4.H7KJl%2Fnovgad6Dflz6.pdf&text=Alcancei+minha+meta+e+conquistei+meu+certificado+no+curso+de+ingl%C3%AAs+na+Wise+Up&documentType=CERTIFICATE&title=Wise+Up+Certificate&documentImage=https%3A%2F%2Ffiles-plus.wiseup.com%2Fstorage%2Fimages%2Fwiseup-plus%2FcertificadoPlus.png" download>View certificate</a>
        </li>

        <li>
          <div>
            <h2>Rocketseat</h2>
            <p>Bootcamp: Full Stack Developer (Node, React JS, and React Native)</p>
            <time>Mar 2019 - Jun 2019</time>
          </div>          
        </li>

        <li>
          <div>
            <h2>Universidade Paulista UNIP</h2>
            <p>Bachelors in Computer Science</p>
            <time>Jan 2015 - Dez 2018</time>
          </div>          
        </li>
      </ul>
    </main>
  )
}