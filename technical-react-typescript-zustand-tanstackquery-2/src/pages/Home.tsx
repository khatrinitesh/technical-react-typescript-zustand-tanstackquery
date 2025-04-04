import React from "react";
import Calendar from "../components/Calendar";

const Home: React.FC = () => {
  var value: any = "anil";

  const texthappy: string = "happy coding";

  const numberwise: number[] = [1, 22, 33, 444];
  const sumwise = [1, 2, 3, 4, 5];
  const acc = sumwise.reduce((a, b) => a + b);

  type Person = {
    id: number;
    name: string;
    age: number;
  };
  const person: Person[] = [
    { id: 1, name: "test1", age: 33 },
    { id: 2, name: "test2", age: 43 },
    { id: 3, name: "test3", age: 23 },
    { id: 4, name: "test4", age: 13 },
  ] as const;

  const person1:{name:string,age:number;isEmployed:boolean} = {
    name:'test',
    age:34,
    isEmployed:false
  }

  let names:string[] = ['vishal','mayur','sonal']

  var n1:number = 10;
  var n2:number = 20;

  const fruitwise:string[] = ['apple','mango','custard','pienapple','watermelon','mosambi','blueberry']
  return (
    <>
      <Calendar />
      <br />
      {value}
      <br />
      {texthappy}
      <br />
      {numberwise.join("-")}
      <br />
      {acc}
      <br />
      {/* Render the person array as a list */}
      {person.map((p) => (
        <div key={p.id}>
          {p.name} (Age: {p.age})
        </div>
      ))}
      <br />
      {person1.name} {" "} {person1.age} {" "} {person1.isEmployed ? 'test1' : 'test2'}
      <br />
      {names.join(', ')}
      <br />
      {n1 + n2}
      <br />
      {fruitwise} 
    </>
  );
};

export default Home;
