import { Button, Htag, Input, Rating, Tag, Textarea } from '../components';
import { Paragraph } from '../components';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({menu, firstCategory}: HomeProps): JSX.Element {
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
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
      <Input placeholder='test' />
      <Textarea placeholder='test' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/categories');
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}
