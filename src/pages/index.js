import React, { useEffect } from "react";
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'
import lottie from "lottie-web"



export default function Index() {


    return (
        <Layout>
        <div className="container-fluid">
            <section className={styles.header}>
                <img src="/inspire-logo.svg" alt="hero image" style={{maxWidth: '100%'}}/>
            </section>

            
<div className={styles.propArea}>
<h2 className="text-center mt-5 mb-4">Value prop area</h2>
            <section className={styles.value}>
          <div className="value">
      <img src="/flag.svg" alt="flag icon" className="bottom-19" />
      <h2>Title</h2>  
      <h3>text</h3>  
    </div>
            </section>
            <section className={styles.value}>
          <div className="value">
      <img src="/pen.svg" alt="pen icon" className="bottom-19" />
      <h2>Title</h2>  
      <h3>text</h3>      
    </div>
            </section>
            <section className={styles.value}>
          <div className="value">
      <img src="/inspire-wheel.svg" alt="inspire wheel icon" className="bottom-19" />
      <h2>Title</h2>  
      <h3>text</h3>      
    </div>
            </section>

            <Link className={styles.blueBtn} to="/community">Join Inspire</Link>

            <h2 className="text-start">Inspire Spaces</h2>
            <div style={{maxWidth: '382px', display: 'inline-block', margin: '10px'}}>
            <div className={styles.spaces}>Work</div>
            <Link className={styles.whiteBtn}>Our workspaces portfolio</Link>
            </div>
            <div style={{maxWidth: '382px', display: 'inline-block', margin: '10px'}}>
            <div className={styles.spaces}>Live</div>
            <Link className={styles.whiteBtn}>Our workspaces portfolio</Link>
            </div>
            <div style={{maxWidth: '382px', display: 'inline-block', margin: '10px'}}>
            <div className={styles.spaces}>Relax</div>
            <Link className={styles.whiteBtn}>Our workspaces portfolio</Link>
            </div>
            <div className={styles.title}>
            <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”</h1>
            </div>
            <div className={styles.innerArea}>
            <div className={styles.blockGrey} ></div>
            <div className={styles.block}>
                <h1>Community</h1>
                <p style={{maxWidth: '592px', margin: '30px 0px 40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <Link className={styles.whiteBtn}>Learn more</Link>
            </div>

            
            <div className={styles.block}>
                <h1>Innovation</h1>
                <p style={{maxWidth: '592px', margin: '30px 0px 40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <Link className={styles.whiteBtn}>Learn more</Link>
            </div>
            <div className={styles.blockGrey} ></div>


            <div className={styles.blockGrey} ></div>
            <div className={styles.block}>
                <h1>Programs & services</h1>
                <p style={{maxWidth: '592px', margin: '30px 0px 40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <Link className={styles.whiteBtn}>Learn more</Link>
            </div>


            <div className={styles.block}>
                <h1>Inspire app</h1>
                <p style={{maxWidth: '592px', margin: '30px 0px 40px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <Link className={styles.whiteBtn}>Learn more</Link>
            </div>
            <div className={styles.blockGrey} ></div>
            

            </div>
            <div className={styles.innerAreaFull}>
            <h2 className="text-start">Our Partners</h2>
            <div className={styles.partner}></div>
            <div className={styles.partner}></div>
            <div className={styles.partner}></div>
            <div className={styles.partner}></div>
            <div className={styles.partner}></div>
            <div className={styles.partner}></div>
            <div className="text-center">
            <Link className={styles.whiteBtn}>Become a partner</Link>
           
            </div>
            


            </div>

            

            
            </div>

            



</div>
        </Layout>
    )
}
