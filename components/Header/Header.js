import styles from './Header.module.scss'
import Container from '@components/Container/Container'
import Image from 'next/image'

export default function Header({ title }) {
  return (
  	<Container className={styles.container}>
  	  <div className={styles.contentLeft}>
            <a className={styles.logo} href="/">
              <Image
               src="/img/hm-logo-nav.png"
               alt="Holy Mountain Logo"
               width={150}
               height={150}
               layout="intrinsic"
             />
            </a>
  	    
            <div className={styles.title}>
              <h1 className="computerfont">{title}</h1>
            </div>
            
  	  </div>
  
  	  <div className={styles.contentRight}>
  	    
  	  </div>
  	  
  	</Container>
  )
}
