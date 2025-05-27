import Image from "next/image";
import { Button, Card } from "flowbite-react";
import jessica from './assets/images/avatar-jessica.jpeg'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Card className="container">
        <Image src={jessica} alt={"Image of Jessica"} className="img"/>
        <div className="text-container">
          <h2>Jessica Randall</h2>
          <p className="green-text">London, United Kingdom</p>
          <p>&quot;Front-end developer and avid reader.&quot;</p>
        </div>
        <div className="button-container">
          <Button as={Link} href="https://www.github.com" className="btn" target="_blank">GitHub</Button>
          <Button as={Link} href="https://www.frontendmentor.io" className="btn" target="_blank">Frontend Mentor</Button>
          <Button as={Link} href="https://www.linkedin.com" className="btn" target="_blank">LinkedIn</Button>
          <Button as={Link} href="https://x.com/" className="btn" target="_blank">Twitter</Button>
          <Button as={Link} href="https://www.instagram.com/" className="btn" target="_blank">Instagram</Button>
        </div>
      </Card>

      <footer>
          <p>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          </p>
          <p>
            Coded by <a href="https://www.haggardwebdev.space/"  target="_blank" >Felicia Haggard</a>.
          </p>
      </footer>
    </main>
  );
}
