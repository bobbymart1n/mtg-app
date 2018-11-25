import React from 'react';
import Card from './../blocks/Card';

const EventCard = ({ title, date, cost, shopName, icon }) => (
  <Card>
    <Card.Header imgLink='http://magic.wizards.com/sites/mtg/files/image_legacy_migration/sideboard/images/ptgen07/F_Game.jpg' />
    <Card.Body
      title={title}
      date={date}
      cost={cost}
      shopName={shopName}
      icon={icon} />
  </Card>
);

export default EventCard;
