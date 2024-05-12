import './stars.css';

// random number generator
function* pseudoRandomGenerator(seed) {
  let x = Math.sin(seed++) * 10000;
  while (true) {
    x = Math.sin(seed++) * 10000;
    yield x - Math.floor(x);
  }
}

const Stars = () => {
  const numStars = 370;
  let stars = [];

  const random = pseudoRandomGenerator(0);

  for (let i = 0; i < numStars; i++) {
    const style = {
      left: `${random.next().value * 100}vw`,
      top: `${random.next().value * 100}vh`,
      animationDelay: `${random.next().value * 2}s`,
      animationDuration: `${random.next().value * 3 + 2}s`,
      animationTimingFunction: `cubic-bezier(${random.next().value}, ${random.next().value}, ${random.next().value}, ${random.next().value})`,
      opacity: random.next().value
    };
    stars.push(<div className="star" style={style} key={i} />);
  }

  return <div className="stars">{stars}</div>;
};

export default Stars;