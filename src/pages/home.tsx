import { About } from "../components/about";
import { Hero } from "../components/hero";
import { License } from "../components/license";
import { Payment } from "../components/payment";
import { Transfer } from "../components/transfer";

export function Home() {
  return (
    <>
      <Hero id="home" />
      <About id="about" />
      <License id="licensing" />
      <Transfer id="transfer" />
      <Payment id="payment" />
    </>
  );
}
