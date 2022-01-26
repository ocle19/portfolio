import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home(){
   return (
      <div className={styles.container}>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Cleber Siqueira - Desenvolvedor Web</title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
         </Head>
         <div className={styles.main}>
               <div>
                  <Image 
                     className={styles.imgPerfil}
                     src="https://filesocle19.s3.amazonaws.com/profile1.jpeg" 
                     alt="Foto de perfil"
                     width={150} 
                     height={225}
                  />
               </div>
               <div className={styles.infos}>
                  <h1>
                     Cleber Siqueira
                  </h1>
                  <p className={styles.description}>@ocle19</p>
                     <a className={styles.btnGithub}
                        href="https://github.com/ocle19"
                     >
                        <Image
                           src="/github.svg"
                           width={32}
                           height={32}
                        />    
                      Github
                     </a>
                     <a className={styles.btnLinkedin}
                        href="https://linkedin.com/in/ocle19">
                        <Image
                           src="/linkedin.svg"
                           width={32}
                           height={32}
                        />  
                        LinkedIn
                     </a>
                     <a className={styles.btnInstagram}
                        href="https://instagram.com/ocle19"
                        >
                        <Image
                           src="/instagram.svg"
                           width={32}
                           height={32}
                        />  
                        Instagram
                     </a>
                     <a className={styles.btnFacebook}
                        href="https://facebook.com/ocle19"
                        >
                        <Image
                           src="/facebook.svg"
                           width={32}
                           height={32}
                        />  
                        Facebook
                     </a>
                  </div>
         </div>
      </div>
   )
}


export default Home;