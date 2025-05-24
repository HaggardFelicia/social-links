import Image from "next/image";
import { Avatar, Button, Card } from "flowbite-react";
import jessica from './assets/images/avatar-jessica.jpeg'


export default function Home() {
  return (
    <main>
      <Card className="container">
        <Image src={jessica} alt={"Image of Jessica"} className="img"/>
        <div className="text-container">
          <h2>Jessica Randall</h2>
          <p className="green-text">London, United Kingdom</p>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className="button-container">
          <Button>GitHub</Button>
          <Button>Frontend Mentor</Button>
          <Button>LinkedIn</Button>
          <Button>Twitter</Button>
          <Button>Instagram</Button>
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
