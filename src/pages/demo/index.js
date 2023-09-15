import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import solteiro from './../../assets/img/ap1.jpg'
import casal from './../../assets/img/ap2.jpg'
import quatro from './../../assets/img/ap3.jpg'
import geral from './../../assets/img/ap4.jpg'
import './../demo/demo.css'

function Demo() {

    return (
      <>
        <Header/>
		<div className="margem_demo">

            <div className="caixa_demo">
            <h1>Bem-vindo!</h1>
            </div>
			<div className="caixa_demo">
				<h2>Apartamentos para solterios</h2>
				<img src={solteiro} class="img-fluid"/>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nemo mollitia vel cupiditate sed
					dicta quia dolorum ducimus ea numquam consequatur iusto vitae quidem possimus exercitationem ullam
					sunt aliquid id.</p>
			</div>

			<div className="caixa_demo">
				<h2>Apartamentos para Casais</h2>
				<img src={casal} class="img-fluid"/>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nemo mollitia vel cupiditate sed
					dicta quia dolorum ducimus ea numquam consequatur iusto vitae quidem possimus exercitationem ullam
					sunt aliquid id.</p>
			</div>

			<div className="caixa_demo">
				<h2>Apartamentos para até 4 pessoas</h2>
				<img src={quatro} class="img-fluid" />
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nemo mollitia vel cupiditate sed
					dicta quia dolorum ducimus ea numquam consequatur iusto vitae quidem possimus exercitationem ullam
					sunt aliquid id.</p>
			</div>

			<div className="caixa_demo">
				<h2>Apartamentos em geral</h2>
				<img src={geral} class="img-fluid"/>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nemo mollitia vel cupiditate sed
					dicta quia dolorum ducimus ea numquam consequatur iusto vitae quidem possimus exercitationem ullam
					sunt aliquid id.</p>
			</div>
		</div>
		<br/><br/><br/><br/>

        <Footer/>

      </>
    );
}
export default Demo;
