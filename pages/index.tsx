import { Button, Htag, Tag } from '../components';
import { Paragraph } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
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
      <Tag size="S" color='red'>Small</Tag>
      <Tag size="M" color='ghost'>Medium</Tag>
      <Tag size="L" color='primary'>Large</Tag>
      <Tag href='google.com' color='green'>non size</Tag>
    </div>
  );
}
