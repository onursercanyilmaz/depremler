import Container from "@/components/container";
import Logo from "@/components/logo";

import EarthSocial from "@/components/earth-social";
export default function Footer() {
  return (
    <footer className="mt-20 bg-zinc-50 py-20 dark:bg-zinc-800">
      <Container>
       

        <div style={{ display: "flex", justifyContent: "space-between" }} className="mt-10 space-y-4 text-xs ">
        <div>  <Logo /> </div>
        <div>   Hello </div>
        <div style={{ display:"column", justifyContent: "center" }}>  <EarthSocial github="https://github.com/onursercanyilmaz" linkedin="https://linkedin.com/in/osy" /> </div>
        
  
        
        </div>
        
      </Container>
    </footer>
  );
}
