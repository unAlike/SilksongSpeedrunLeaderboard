import Image from "next/image";

export default function Home() {

 const names = ['Ryan, ','Alex, ','Dale'];

const data = [
        {
            name:'Ryan',
            age:26,
            DOB:11/28/1999
        },
        {
            name:'Dale',
            age:21,
            DOB:12/8/2004
        },
        {
            name:'Alex',
            age:35,
            DOB:1/1/1989
        }
    ]

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div className="justify-center align-middle">
        <h1 className="align-middle justify-center">Hello World!{names}</h1>
      </div>

        <div>
            <h1>{data.map(person=>(<p>Hello, {person.name}, you are {person.age} years old. You were born on {person.DOB}</p>))}</h1>
        </div>


    </div>
  );
}