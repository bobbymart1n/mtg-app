import { Container } from 'unstated';

class Cards extends Container<CardState> {
  state = {}
  handleGettingCards = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards');
    const data = await response.json();
    this.setState({...data});
  }
  handleGettingSet = async (set) => {
    const response = await fetch(`https://api.magicthegathering.io/v1/sets/${set}/booster`);
    const data = await response.json();
    this.setState({...data})
  }
}

export default Cards;
