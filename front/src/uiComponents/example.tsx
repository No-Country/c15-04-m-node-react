interface Iprops {
  name: string;
}

const example = ({ name }: Iprops) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default example;
