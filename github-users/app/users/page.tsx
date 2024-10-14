import React from 'react';

interface People {
  id: string;
  url: string;
  avatar_url: string;
  login: string;
  html_url: string;
}

const Contact = async () => {
  const res = await fetch("https://api.github.com/users");
  const people = await res.json();
  return (
    <>
      <main style={styles.main}>
        {people.map((p: People) => (
          <div key={p.id} style={styles.card}>
            <img src={p.avatar_url} alt={p.login} style={styles.avatar} />
            <h3 style={styles.name}>{p.login}</h3>
            <a href={p.html_url} style={styles.link} target="_blank" rel="noopener noreferrer">Profile Link</a>
          </div>
        ))}
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
  },
  card: {
    width: '200px',
    textAlign: 'center',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    fontSize: '18px',
    margin: '10px 0',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};
export default Contact;
