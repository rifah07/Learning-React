function Names() {
  const names = ["Rima", "Ela", "Shila"];

  return (
    <ul>
      {names.map((name) => {
        return <li>{name}</li>;
      })}
    </ul>
  );
}

export default Names;
