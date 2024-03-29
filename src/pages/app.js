'use client';
import {Inter } from 'next/font/google'
import { Hero, About, Products, Press, Partners, Footer } from './components'
const inter = Inter({ subsets: ["latin"] });

function App() {
  return (
      <main className={inter.className}>
        <Hero/>
        <About/>
        <Products/>
        <Press/>
        <Partners/>
        <Footer/>
      </main>
  );
}

export default App;
