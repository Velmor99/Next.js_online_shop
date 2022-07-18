import { Button, Htag, Rating, Tag } from '../components';
import { Paragraph } from '../components';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Tekst</Htag>
      <Button arrow="right" appearance="primary">
        button
      </Button>
      <Button arrow="right" appearance="ghost">
        button
      </Button>
      <Button arrow="right" appearance="ghost">
        button
      </Button>
      <Paragraph size="L">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente quisquam magni cumque quibusdam ab
        ducimus dicta ullam quas odit, eligendi culpa tempora atque doloribus! Doloremque voluptatum eaque natus nam.
      </Paragraph>
      <Tag size="S" color="red">
        Small
      </Tag>
      <Tag size="M" color="ghost">
        Medium
      </Tag>
      <Tag size="L" color="primary">
        Large
      </Tag>
      <Tag href="google.com" color="green">
        non size
      </Tag>
      <Rating isEditable={true} setRating={setRating} rating={rating}></Rating>
    </>
  );
}

export default withLayout(Home);
