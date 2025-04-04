import { navLinks } from "../constants/constants";
import { useNavStore } from "../store/useNavStore";
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
    const { activeLink, setActiveLink } = useNavStore();
  
    return (
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        {navLinks.map((link) => (
          <motion.div
            key={link.href}
            onClick={() => setActiveLink(link.label.toLowerCase())}
            style={{
              margin: '0 20px',
              position: 'relative',
              cursor: 'pointer',
              fontSize: '18px',
              paddingBottom: '10px',
            }}
            whileHover={{ scale: 1.1 }}
          >
            {link.label}
            {/* Bottom border animation */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'black',
              }}
              animate={{
                width: activeLink === link.label.toLowerCase() ? '100%' : '0%',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        ))}
      </nav>
    );
  };
  
  export default NavBar;



